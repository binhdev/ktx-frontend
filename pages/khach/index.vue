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
                              <tr v-for="khach in khachs" :key="khach.id">
                                <td>{{ khach.id }}</td>
                                <td>{{ khach.ho_ten }}</td>
                                <td>{{ khach.cmnd }}</td>
                                <td>{{ khach.dien_thoai }}</td>
                                <td>{{ khach.dia_chi }}</td>
                                <td></td>
                                <td></td>
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
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get("http://localhost/ktx/api/v1/khachluutrus");
    return { khachs: data.data };
  }
};
</script>
