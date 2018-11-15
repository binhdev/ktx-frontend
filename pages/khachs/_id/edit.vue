<template>
    <khach-form v-bind:khach="khach"></khach-form>
</template>

<script>
import KhachForm from '@/components/KhachForm.vue'
import { api } from '@/api/index'
import { KHACHS_ENDPOINT } from '@/utils/constants'

export default {
    name: 'editKhach',
    components: { KhachForm },
    data() {
        return {
            khach: {}
        }
    },
    created() {
        console.log('created')
    },
    mounted() {
        this.getKhach()
    },
    methods: {
        getKhach() {
            api.show(this, KHACHS_ENDPOINT, this.$route.params.id)
            .then(res => {
                this.khach = res.data.data
            })
        }
    }
}
</script>