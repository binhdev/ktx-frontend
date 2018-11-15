<template>
    <loai-khach-form :loaikhach="loaikhach"></loai-khach-form>
</template>

<script>
import LoaiKhachForm from '@/components/LoaiKhachForm.vue'

export default {
    name: 'createLoaiKhach',
    components: { LoaiKhachForm },
    
    data() {
        return {
            loaikhach: {
                loai_khach: '',
                ghi_chu: ''
            }
        }
    }
}
</script>