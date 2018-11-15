<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="header">
                      <h4 class="title">Khach</h4>
                      <p class="category">Khach luu tru</p>
                  </div>
                  <div class="content table-responsive table-full-width">
                      <table class="table table-hover table-striped">
                          <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>CMND</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>#</th>
                            <th>#</th>
                          </thead>
                          <tbody>
                              <tr v-for="khach in listKhachs" :key="khach.id">
                                <td>{{ khach.id }}</td>
                                <td>{{ khach.ho_ten }}</td>
                                <td>{{ khach.cmnd }}</td>
                                <td>{{ khach.dien_thoai }}</td>
                                <td>{{ khach.dia_chi }}</td>
                                <td>{{ khach.ngay_vao }}</td>
                                <td>{{ khach.ngay_ra }}</td>
                                <td>
                                  <nuxt-link :to="{path: `khachs/${khach.id}/edit`}">          
                                      <b-button class="btn btn-primary">Edit</b-button>
                                  </nuxt-link>
                                </td>                                
                                <td><button @click="destroy(khach)" class="btn btn-danger">Delete</button></td>                                
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
import { KHACHS_ENDPOINT } from '@/utils/constants'

export default {
  data() {
    return {
      listKhachs: [],
      currentPage: 1
    }
  },
  mounted() {
    this.getListKhachs();
  },

  methods: {
    getListKhachs() {
      api.index(this, KHACHS_ENDPOINT).then(res => {
        this.listKhachs = res.data.data
      }).catch(err => {
        console.log('getListKhachs', err)
      })
    },

    destroy(khach){
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
          api.delete(this, KHACHS_ENDPOINT, khach.id).then(res => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            this.getListKhachs()
          })  
        } else {
          swal("Opp !!!");
        }
      });
    }
  }
};
</script>