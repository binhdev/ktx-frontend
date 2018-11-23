<template>
    <loai-khach-form v-bind:loaikhach="loaikhach"></loai-khach-form>
</template>

<script>
import LoaiKhachForm from '@/components/LoaiKhachForm.vue'
import { api } from '@/api/index'
import { LOAI_KHACHS_ENDPOINT } from '@/utils/constants'

export default {
    name: 'editLoaiKhach',
    components: { LoaiKhachForm },
    data() {
        return {
            loaikhach: {}
        }
    },
    created() {
        console.log('created')
    },
    mounted() {
        this.getLoaiKhach()
    },
    methods: {
        getLoaiKhach() {
            api.show(this, LOAI_KHACHS_ENDPOINT, this.$route.params.id)
            .then(res => {
                this.loaikhach = res.data.data
            })
        }
    }
}
</script>