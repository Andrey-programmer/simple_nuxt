<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Nuxt SSR</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <nuxt-link  class="nav-link" exact active-class="active"  :to='"/"'>Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" no-prefetch active-class="active" :to='"/about"'>About</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" active-class="active" :to='"/users"'>Users</nuxt-link>
                </li>
                <li class="nav-item" v-if="!hasToken">
                    <nuxt-link class="nav-link" active-class="active" :to='"/login"'>Login</nuxt-link>
                </li>
                <li class="nav-item" v-else>
                    <a 
                        href="#" 
                        class="nav-link" 
                        active-class="active"
                        @click.prevent="logout"
                    >Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    },
    computed: {
        hasToken() {
            return this.$store.getters['hasToken']
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
