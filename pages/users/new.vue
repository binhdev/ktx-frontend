<template>
    <user-form :user="user"></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
    name: 'createUser',
    components: { UserForm },
    
    data() {
        return {
            user: {
                name: '',
                email: '',
                role: ''
            }
        }
    }
}
</script>