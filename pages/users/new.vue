<template>
    <user-form></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
    components: { UserForm },
    fetch({store}) {
        store.commit('users/SET_USER', {})
    }
}
</script>