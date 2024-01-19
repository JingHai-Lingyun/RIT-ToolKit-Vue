<script>
import authorcard from '@/components/about/authorcard.vue'

export default {
    components: {
        authorcard
    }
}
</script>

<template>
    <div class="about">
        <h1 id="title">Information</h1>
        <div class="apart">
            <h2 class="partTitle">About</h2>
            <authorcard
                :cardTitle="'Author'"
                :cardSubTitle="'Copyright (c) 2024 LingyunAwA, All Rights Reserved.'"
            ></authorcard>
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
