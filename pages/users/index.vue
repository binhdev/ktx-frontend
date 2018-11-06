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
                              <tr v-for="user in list" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>Edit</td>
                                <td>Delete</td>
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
import { mapState } from "vuex";

export default {
  async fetch({ store }) {
    await store.dispatch("users/get");
  },

  computed: {
    ...mapState({
      list: state => {
        return state.users.list;
      }
    })
  }
};
</script>