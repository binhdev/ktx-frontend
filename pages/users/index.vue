<template>
  <div class="container-fluid">
      <div class="row">          
          <div class="col-md-12">
              <div class="card">
                  <div class="header">  
                      <h4 class="title">Quan ly ky tuc</h4>
                      <p class="category">Quan ly nhan su quan ly</p>
                  </div>                
                  <div class="content table-responsive table-full-width">
                      <table class="table table-hover table-striped">
                          <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>#</th>
                            <th>#</th>
                          </thead>
                          <tbody>
                              <tr v-for="user in listUsers" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>
                                <nuxt-link :to="{path: 'users/' + user.id }">          
                                      {{ user.name }}
                                </nuxt-link>
                                </td>
                                <td>{{ user.email }}</td>
                                <td>Admin</td>
                                <td>
                                  <nuxt-link :to="{path: `users/${user.id}/edit`}">          
                                      <b-button class="btn btn-primary">Edit</b-button>
                                  </nuxt-link>
                                </td>                                
                                <td>
                                  <b-button @click="destroy(user)" class="btn btn-danger">Delete</b-button>
                                </td>   
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>
          </div>
        </div>
  </div>
</template>


<script>
import { api } from '@/api/index'
import { USERS_ENDPOINT } from '@/utils/constants'

export default {

  data() {
    return {
      listUsers: [],
      currentPage: 1
    }
  },

  mounted() {
    this.getListUsers();
  },

  methods: {
    getListUsers() {
      api.index(this, USERS_ENDPOINT).then(res => {
        this.listUsers = res.data.data
      }).catch(err => {
        console.log('getListUser', err)
      })
    },

    destroy(user){
      // Use sweetalert2
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          api.delete(this,  USERS_ENDPOINT, user.id).then(res => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            this.getListUsers()
          })  
        } else {
          swal("Opp !!!");
        }
      });
    }
  }
};
</script>