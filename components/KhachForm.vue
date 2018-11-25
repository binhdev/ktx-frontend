<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-left" style="margin-left: 15px">
          <b-link :to="'/khachs'">
            Back
          </b-link>
        </b-col>
      </b-row>
      
      <div>
        <div class="row">
          <div class="col-md-6">
            <b-form-group id="inputGroupHoten"
                label="Tên khách:"
                label-for="hoten"
                description="Thôn tin họ tên khách.">
              <b-form-input id="hoten"
                  type="text"
                  name="khach[ho_ten]"
                  :value="khach.ho_ten"
                  v-model="form.ho_ten"
                  required
                  placeholder="Nhập tên khách">
              </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupCmnd"
                label="CMND:"
                label-for="cmndInput"
                description="Cung cấp chứng minh nhân dân.">
              <b-form-input id="cmndInput"
                  type="text"
                  name="khach[cmnd]"
                  :value="khach.cmnd"
                  v-model="form.cmnd"
                  required
                  placeholder="Nhập CMND">
              </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupDienThoai"
                label="Số điện thoại:"
                label-for="inputPhone"
                description="Thông tin số điện thoại khách.">
              <b-form-input id="inputPhone"
                  type="text"            
                  name="khach[dien_thoai]"
                  :value="khach.dien_thoai"
                  v-model="form.dien_thoai"
                  required
                  placeholder="Nhập số điện thoại">
              </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupDiaChi"
                label="Địa Chỉ:"
                label-for="inputDiaChi"
                description="Thông tin địa chỉ khách.">
              <b-form-input id="inputDiaChi"
                  type="text"            
                  name="khach[dia_chi]"
                  :value="khach.dia_chi"
                  v-model="form.dia_chi"
                  required
                  placeholder="Nhập số điện thoại">
              </b-form-input>
            </b-form-group>            
          </div>
          <div class="col-md-6">
            <b-form-group id="inputGroupNgayVao"
                label="Ngày vào:"
                label-for="inputNgayVao"
                description="Thông ngày vào ở.">
              <b-form-input id="inputNgayVao"
                  type="date"            
                  name="khach[ngay_vao]"
                  :value="khach.ngay_vao"
                  v-model="form.ngay_vao"
                  required
                  placeholder="Nhập ngày vào">
              </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupNgayRa"
                label="Ngày ra:"
                label-for="inputNgayRa"
                description="Thông tin ngày trả phòng.">
              <b-form-input id="inputNgayRa"
                  type="date"            
                  name="khach[ngay_ra]"
                  :value="dateNow"
                  v-model="form.ngay_ra"
                  required
                  placeholder="Nhập ngày ra">
              </b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupPhong"
                label="Phòng:"
                label-for="inputPhong"
                description="Thông tin phòng ở.">
                <b-form-select v-model="form.phong_id">                   
                    <option v-for="(item, index) in phongs" 
                        :key="index"
                        :value="item.id">
                        {{ item.ten_phong }}
                    </option>
                </b-form-select>
            </b-form-group>
            <b-form-group id="inputGroupLoaiKhach"
                label="Loại khách:"
                label-for="inputLoaiKhach"
                description="Thông tin loại khách.">
                <b-form-select v-model="form.loai_khach_id">                   
                    <option v-for="(item, index) in loaikhachs" 
                        :key="index"
                        :value="item.id">
                        {{ item.loai_khach }}
                    </option>
                </b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>
        </div>
      </div>      
    </b-form>
  </div>
</template>

<script>
import { api } from '@/api/index'
import { KHACHS_ENDPOINT, PHONGS_ENDPOINT, LOAI_KHACHS_ENDPOINT } from '@/utils/constants'

export default {
  name: "KhachForm",
  props: ['khach'],
  data() {
    return {
      dateNow: new Date().toLocaleString(),
      form: {
        ho_ten: '',
        cmnd: '',
        dien_thoai: '',
        dia_chi: '',
        ngay_vao: '',
        ngay_ra: '',
        phong_id: null,
        loai_khach_id: null
      },
      show: true,
      phongs: [],
      loaikhachs: []
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {
    isUpdate() { return this.khach.hasOwnProperty('id') },

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
    create(khach) {
        api.store(this, KHACHS_ENDPOINT, khach)
        .then(res => {
          swal("Update Success!", {
              icon: "success",
            });
        })
    },
    update(khach) {
        api.update(this, KHACHS_ENDPOINT, this.$route.params.id, khach)
        .then(res => {
          swal("Update Success!", {
              icon: "success",
            });
        })
    },
    loadData() {
      api.index(this, PHONGS_ENDPOINT)
      .then(res => {
        this.phongs = res.data.data
        console.log(this.phongs)
      })

      api.index(this, LOAI_KHACHS_ENDPOINT)
      .then(res => {
        this.loaikhachs = res.data.data
        console.log(this.loaikhachs)
      })
    }

  }
}
</script>