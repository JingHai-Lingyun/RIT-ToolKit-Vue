<script>
import themesettingcard from '@/components/setting/themesettingcard.vue'

export default {
    components: {
        themesettingcard
    }
}
</script>

<template>
    <div class="settings">
        <h1 id="title">Settings</h1>
        <div class="apart" id="Personalization">
            <h2 class="partTitle">Personalization</h2>
            <themesettingcard
                :cardTitle="'Application Theme'"
                :cardSubTitle="'Change the appearamce of your application'"
                :cardType="'Theme'"
            ></themesettingcard>
        </div>
    </div>
</template>

<style scoped lang="less">
h1#title {
    margin-top: 20px;
    margin-left: 40px;
}
div.apart {
    display: block;
    padding-left: 70px;
    margin-top: 20px;
    h2.partTitle {
        opacity: 0.9;
    }
}
</style>
