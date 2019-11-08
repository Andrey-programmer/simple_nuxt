<template>
    <section>
        <div class="alert alert-danger mb-3" v-if="$route.query.message">
            <strong>Пожалуйста войдите в систему!</strong>
        </div>
        <form @submit.prevent="onSubmit">
            <h1 class="mb-5">Login page</h1>
            <div class="form-group">
                <input type="text"  class="form-control mb-3">
                <p>
                    <nuxt-link to="/">to home page</nuxt-link>
                </p>
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        layout: 'empty',
        methods: {
            onSubmit() {
                this.$store.dispatch('login')
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        width: 500px;
        margin: 0 auto;
    }
</style>