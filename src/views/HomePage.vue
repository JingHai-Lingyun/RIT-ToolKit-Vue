<script>
export default {
    methods: {
        openRITOfficalPage() {
            window.open('https://www.mc-rit.com/')
        }
    }
}
</script>

<template>
    <div class="homepage">
        <div id="left" class="aside">
            <div>
                <h1 class="title">Welcome to use this RIT ToolKit</h1>
                <p class="info">
                    If this tool help you, you can sponsor author at
                    <a normal href="https://afdian.net/a/lingyunawa">here</a>
                </p>
            </div>
        </div>
        <div id="right" class="aside" @click="openRITOfficalPage()">
            <div style="cursor: pointer">
                <img src="@/assets/redstone.svg" alt="Redstone" />
                <p>Redstone</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
div.homepage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: 'left right';
    div#left {
        grid-area: left;
        h1 {
            font-size: 2.2rem;
        }
        p {
            font-size: 1.2rem;
        }
        a[normal] {
            background-color: initial;
            margin: 0;
            position: relative;
            left: -2px;
            &:hover {
                opacity: 0.9;
            }
            &:active {
                opacity: 0.8;
            }
        }
    }
    div#right {
        grid-area: right;
        img {
            width: 270px;
            height: 270px;
            transform: none;
            transition: transform 0.5s ease-in-out;
            &:hover {
                transform: scale(1.5) rotate(-12deg);
                & ~ p {
                    transform: translateY(47px);
                }
            }
        }
        p {
            width: 270px;
            text-align: center;
            opacity: 0.3;
            transition: transform 0.5s ease-in-out;
        }
    }
    div.aside {
        padding: 20px 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
