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
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td><button @click="showUser(user)" class="btn btn-primary">Edit</button></td>                                
                                <td><button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button></td>   
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

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
    showUser: user => {
      this.$router.push({ name: 'users.edit', params: { id: user.id, object: user}})
    }
  }
};
</script>