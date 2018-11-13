<template>
    <user-form></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { mapActions } from 'vuex';

export default {
    name: 'editUser',
    components: { UserForm },
    async fetch({store, params}) {
        store.dispatch('users/show', {id: params.id})        
    }
}
</script>