<template>
  <div class="container-fluid">
      <div class="row">          
          <div class="col-md-12">
              <div class="card">
                  <div class="header">  
                    <div style="float: left;">
                        <h4 class="title">Nhân sự quản lý</h4>
                        <p class="category">Danh sách các nhân sự có quyền truy cập hệ thống quản lý</p>
                    </div>
                    <div style="float: right">
                      <nuxt-link :to="{path: 'loaikhachs/new'}">          
                          <b-button class="btn btn-primary">New</b-button>
                      </nuxt-link>
                    </div>
                  </div>                
                  <div class="content table-responsive table-full-width">
                      <table class="table table-hover table-striped">
                          <thead>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Ghi Chú</th>
                            <th>#</th>
                            <th>#</th>
                          </thead>
                          <tbody>
                              <tr v-for="loaikhach in listLoaiKhachs" :key="loaikhach.id">
                                <td>{{ loaikhach.id }}</td>
                                <td>
                                <nuxt-link :to="{path: 'loaikhachs/' + loaikhach.id }">          
                                      {{ loaikhach.loai_khach }}
                                </nuxt-link>
                                </td>
                                <td>{{ loaikhach.ghi_chu }}</td>                                
                                <td>
                                  <nuxt-link :to="{path: `loaikhachs/${loaikhach.id}/edit`}">          
                                      <b-button class="btn btn-primary">Edit</b-button>
                                  </nuxt-link>
                                </td>                                
                                <td>
                                  <b-button @click="destroy(loaikhach)" class="btn btn-danger">Delete</b-button>
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
import { LOAI_KHACHS_ENDPOINT } from '@/utils/constants'

export default {

  data() {
    return {
      listLoaiKhachs: [],
      currentPage: 1
    }
  },

  mounted() {
    this.getListLoaiKhachs();
  },

  methods: {
    getListLoaiKhachs() {
      api.index(this, LOAI_KHACHS_ENDPOINT).then(res => {
        this.listLoaiKhachs = res.data.data
      }).catch(err => {
        console.log('listLoaiKhachs', err)
      })
    },

    destroy(loaikhach){
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
          api.delete(this,  LOAI_KHACHS_ENDPOINT, loaikhach.id).then(res => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            this.getListLoaiKhachs()
          })  
        } else {
          swal("Opp !!!");
        }
      });
    }
  }
};
</script>