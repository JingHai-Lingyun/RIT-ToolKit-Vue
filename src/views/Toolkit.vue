<script>
import counter from '@/components/Toolkit/counter.vue' 

export default {
    name: 'ToolkitView',
    components: {
        counter
    },
    methods: {
        goToCounterPage() {
            this.$router.push('/Counter-page')
        }
    }
}
</script>

<template>
    <div class="Toolkit">
        <h1 id="title">{{ $t('Toolkit') }}</h1>
        <div class="counport" id="counter">
            <h2 class="partTitle">{{ $t('counter') }}</h2>
            <router-link to="/Counter-page">{{ $t('Go to Counter-Page') }}</router-link>
            <counter></counter>
        </div>
    </div>
</template>

<style scoped lang="less">
h1#title {
    margin-top: 20px;
    margin-left: 40px;
}
div.counport {
    display: block;
    padding-left: 70px;
    margin-top: 20px;
    h2.partTitle {
        opacity: 0.9;
    }
}
h3#title {
    margin-top: 20px;
    margin-left: 40px;
}
div.counport {
    display: block;
    padding-left: 70px;
    margin-top: 20px;
    h3.partTitle {
        opacity: 0.9;
    }
}
</style>
