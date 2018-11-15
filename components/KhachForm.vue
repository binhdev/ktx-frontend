<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-left" style="margin-left: 15px">
          <b-link :to="'/khachs'">
            Back
          </b-link>
        </b-col>
      </b-row>
      <b-form-group id="inputGroupName"
          label="Your name:"
          label-for="nameInput"
          description="We'll never share your email with anyone else.">
        <b-form-input id="nameInput"
            type="text"
            name="khach[name]"
            :value="khach.name"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupEmail"
          label="Email address:"
          label-for="emailInput"
          description="We'll never share your email with anyone else.">
        <b-form-input id="emailInput"
            type="text"
            name="khach[cmd]"
            :value="khach.cmnd"
            required
            placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupName"
          label="Your password:"
          label-for="inputName">
        <b-form-input id="inputName"
            type="text"            
            name="khach[phone]"
            :value="khach.phone"
            v-model="form.phone"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupRole"
          label="Role:"
          label-for="inputRole">
        <b-form-select id="inputRole"
            :options="roles"
            name="khach[from_date]"
            :value="khach.from_date"
            required
            v-model="form.role">
        </b-form-select>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: "KhachForm",
  props: ['khach'],
  data() {
    return {
      form: {
        name: '',
        cmnd: '',
        phone: '',
        address: '',
        from_date: '',
        to_date: ''
      },
      show: true
    }
  },

  methods: {
    isUpdate() { return this.user.hasOwnProperty('id') },

    onSubmit (evt) {
      evt.preventDefault();
      let vm = this;
      let action = 'khachs/' + (this.isUpdate() ? 'updated' : 'create')
      this.$store.dispatch(action, this.user)
        .then((res) => {
          vm.$route.push('khachs')
        })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.role = null;
      this.$nextTick(() => { this.show = true});
    },
    update(khach) {
        api.update(this, KHACHS_ENDPOINT, this.$route.params.id, khach)
        .then(res => {

        })
    }
  }
}
</script>