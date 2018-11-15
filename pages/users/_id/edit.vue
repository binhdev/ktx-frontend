<template>
    <user-form v-bind:user="user"></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { api } from '@/api/index'
import { USERS_ENDPOINT } from '@/utils/constants'

export default {
    name: 'editUser',
    components: { UserForm },
    data() {
        return {
            user: {}
        }
    },
    created() {
        console.log('created')
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            api.show(this, USERS_ENDPOINT, this.$route.params.id)
            .then(res => {
                this.user = res.data.data
            })
        }
    }
}
</script>