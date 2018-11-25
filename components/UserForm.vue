<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-left" style="margin-left: 15px">
          <b-link :to="'/users'">
            Back
          </b-link>
        </b-col>
      </b-row>
      <b-form-group id="inputGroupName"
          label="User name:"
          label-for="nameInput"
          description="We'll never share your email with anyone else.">
        <b-form-input id="nameInput"
            type="text"
            name="user[name]"
            :value="user.name"
            v-model="form.name"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupEmail"
          label="Email address:"
          label-for="emailInput"
          description="We'll never share your email with anyone else.">
        <b-form-input id="emailInput"
            type="email"
            name="user[email]"
            v-model="form.email"
            :value="user.email"
            required
            placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupPassword"
          label="User password:"
          label-for="inputPassword">
        <b-form-input id="inputPassword"
            type="password"            
            name="user[password]"
            v-model="form.password"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupRePassword"
          label="User Repassword:"
          label-for="inputRePassword">
        <b-form-input id="inputRePassword"
            type="password"            
            name="user[password_confirmation]"
            v-model="form.password_confirmation"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupRole"
          label="Role:"
          label-for="inputRole">
        <b-form-select id="inputRole"
            :options="roles"
            name="user[role]"
            :value="user.role"
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
  name: "UserForm",
  props: ['user'],
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        role: ''
      },
      roles: [
        { text: 'Select One', value: null },
        'Admin', 'Member'
      ],
      show: true
    }
  },

  methods: {
    isUpdate() { return this.user.hasOwnProperty('id') },

    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      let vm = this;
      if(this.isUpdate()){
        this.update(this.form)
      }else{
        this.create(this.form)
      }
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.role = null;
      this.$nextTick(() => { this.show = true});
    },
    create(user) {
        api.store(this, USERS_ENDPOINT, user)
        .then(res => {
          swal("Update Success!", {
              icon: "success",
            });
        })
    },
    update(user) {
        api.update(this, USERS_ENDPOINT, this.$route.params.id, user)
        .then(res => {
          swal("Update Success!", {
              icon: "success",
            });
        })
    }
  }
}
</script>