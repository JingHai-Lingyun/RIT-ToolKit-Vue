<script>
import navbar from '@/components/navbar.vue'
import { useThemeStore } from '@/stores/store'

export default {
    data() {
        return {
            theme: ''
        }
    },
    mounted() {
        // Init
        var ThemeStore = useThemeStore()
        this.theme = ThemeStore.theme
        // Main
    },
    components: {
        navbar
    }
}
</script>

<template>
    <main :class="theme">
        <navbar />
        <router-view />
    </main>
</template>

<style scoped lang="less">
main {
    display: grid;
    grid-template-rows: 90px 1fr;
    grid-template-areas:
        'nav'
        'main';
    margin: 0;
    user-select: none;

    nav {
        grid-area: 'nav';
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 100vw;
    }

    router-view {
        grid-area: 'main';
    }
}
</style>
