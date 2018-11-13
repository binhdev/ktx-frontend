<template>
    <user-form></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { mapActions, mapState } from 'vuex';

export default {
    name: 'editUser',
    components: { UserForm },
    mounted() {
        this.show(this.$route.params)
    },
    computed: {
        ...mapState('users', ['user'])
    },
    methods: {
        ...mapActions('users',['show'])
    }
}
</script>