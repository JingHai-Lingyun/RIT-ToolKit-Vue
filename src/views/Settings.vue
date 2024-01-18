<script>
import settingcard from '../components/settingcard.vue'

export default {
    components: {
        settingcard
    }
}
</script>

<template>
    <div class="settings">
        <h1 id="title">Settings</h1>
        <settingcard
            :cardTitle="'Application Theme'"
            :cardSubTitle="'Change the appearamce of your application'"
            :cardType="'Theme'"
        ></settingcard>
    </div>
</template>

<style scoped lang="less">
h1#title {
    margin-top: 20px;
    margin-left: 40px;
}
</style>
