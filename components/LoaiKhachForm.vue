<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-left" style="margin-left: 15px">
          <b-link :to="'/loaikhachs'">
            Back
          </b-link>
        </b-col>
      </b-row>
      <b-form-group id="inputGroupName"
          label="Name:"
          label-for="nameInput"
          description="Định danh loại khách.">
        <b-form-input id="nameInput"
            type="text"
            name="loaikhach[loai_khach]"
            :value="loaikhach.loai_khach"
            v-model="form.loai_khach"
            required
            placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroupEmail"
          label="Ghi chú:"
          label-for="emailInput"
          description="Ghi chú thêm thông tin về loại khách.">
        <b-form-input id="emailInput"
            type="text"
            name="loaikhach[ghi_chu]"
            v-model="form.ghi_chu"
            :value="loaikhach.email"
            required
            placeholder="Enter ghi chú">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { api } from '@/api/index'
import { USERS_ENDPOINT, LOAI_KHACHS_ENDPOINT } from '@/utils/constants'

export default {
  name: "LoaiKhachForm",
  props: ['loaikhach'],
  data() {
    return {
      form: {
        loai_khach: '',
        ghi_chu: ''
      },
      show: true
    }
  },

  methods: {
    isUpdate() { return this.loaikhach.hasOwnProperty('id') },

    onSubmit (evt) {
      evt.preventDefault();
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
      this.form.ghi_chu = '';
      this.form.loai_khach = '';
      this.$nextTick(() => { this.show = true});
    },
    create(loaikhach) {
        api.store(this, LOAI_KHACHS_ENDPOINT, loaikhach)
        .then(res => {
          swal("Create Success!", {
              icon: "success",
            });
        })
    },
    update(loaikhach) {
        api.update(this, LOAI_KHACHS_ENDPOINT, this.$route.params.id, loaikhach)
        .then(res => {
          swal("Update Success!", {
              icon: "success",
            });
        })
    }
  }
}
</script>