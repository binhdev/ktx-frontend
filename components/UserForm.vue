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
          label="Your name:"
          label-for="nameInput"
          description="We'll never share your email with anyone else.">
        <b-form-input id="nameInput"
            type="text"
            name="user[name]"
            :value="user.name"
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
            :value="user.email"
            required
            placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupName"
          label="Your password:"
          label-for="inputName">
        <b-form-input id="inputName"
            type="password"            
            name="user[password]"
            :value="user.password"
            v-model="form.password"
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
import {mapMutations, mapState} from 'vuex'

export default {
  name: "UserForm",
  data() {
    return {
      form: {
        email: '',
        name: '',
        role: null,
        checked: []
      },
      roles: [
        { text: 'Select One', value: null },
        'Admin', 'Member'
      ],
      show: true
    }
  },

  computed: {
    ...mapState('users', {
      user: state => state.user
    })
  },

  methods: {
    ...mapMutations('users', ['SET_USERS']),
    isUpdate() { return this.user.hasOwnProperty('id') },

    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      let vm = this;
      let action = 'users/' + (this.isUpdate() ? 'updated' : 'create')
      this.$store.dispatch(action, this.user)
        .then((res) => {
          vm.$router.push('users')
        })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.role = null;
      this.$nextTick(() => { this.show = true});
    }
  }
}
</script>