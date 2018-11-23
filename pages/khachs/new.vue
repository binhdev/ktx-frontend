<template>
    <khach-form v-bind:khach="khach"></khach-form>
</template>

<script>
import KhachForm from '@/components/KhachForm.vue'

export default {
    name: 'createKhach',
    components: { KhachForm },
    
    data() {
        return {
            khach: {
                ho_ten: '',
                cmnd: '',
                dien_thoai: '',
                dia_chi: '',
                ngay_vao: null,
                ngay_ra: null
            }
        }
    }
}
</script>