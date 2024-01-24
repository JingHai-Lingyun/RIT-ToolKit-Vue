<script>
import authorcard from '@/components/about/authorcard.vue'
import bugcard from '@/components/about/bugcard.vue'
import newcard from '@/components/about/newcard.vue'

export default {
    name: 'AboutPage',
    components: {
        authorcard,
        bugcard,
        newcard
    }
}
</script>

<template>
    <div class="about">
        <h1 id="title">{{ $t('About') }}</h1>
        <div class="apart">
            <h2 class="partTitle">{{ $t('Author') }}</h2>
            <authorcard
                title = "Author"
                subtitle = "Copyright (c) 2024 LingyunAwA, All rights reserved."
            ></authorcard>
            <authorcard
                title= "Translation Contributors"
                subtitle = "Copyright (c) 2024 Edokawastrife, Chinese package author."
            ></authorcard>
        </div>
        <div class="apart">
            <h2 class="partTitle">{{ $t('Settings') }}</h2>
            <bugcard></bugcard>
            <newcard></newcard>
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
