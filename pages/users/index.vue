<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="header">
                      <h4 class="title">Quan ly ky tuc</h4>
                      <p class="category">Theo doi, kiem tra thong tin phong o</p>
                  </div>
                  <div class="content table-responsive table-full-width">
                      <table class="table table-hover table-striped">
                          <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>#</th>
                            <th>#</th>
                          </thead>
                          <tbody>
                              <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>
                                <nuxt-link :to="{path: 'users/' + user.id }">          
                                      {{ user.name }}
                                </nuxt-link>
                                </td>
                                <td>{{ user.email }}</td>
                                <td>
                                  <nuxt-link :to="{path: 'users/' + user.id + '/edit'}">          
                                      <b-button class="btn btn-primary">Edit</b-button>
                                  </nuxt-link>
                                </td>                                
                                <td>
                                  <b-button @click="showAlert()" class="btn btn-danger">Delete</b-button>
                                </td>   
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
        </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex"

export default {
  created() {
    this.getUsers();
  },

  computed: {
    ...mapState("users", ["users"])
  },

  methods: {
    ...mapActions("users", [
      "getUsers"
    ]),
    editUser: user => {
      this.$router.push({ name: 'users/:id/edit', params: { id: user.id, object: user}})
    },
    showAlert(){
      // Use sweetalert2
      swal("Are you sure you want to do this?", {
        buttons: ["Oh noez!", true],
      });
    }
  }
};
</script>