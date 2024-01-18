<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Scrollbar from 'smooth-scrollbar'

import getCurrentTime from '../common/time'

onMounted(() => {
    Scrollbar.init(document.querySelector('nav.menu'), {
        damping: 0.1,
        renderByPixels: true,
        continuousScrolling: true
    })
    setTimeText()
})

function setTimeText() {
    const time = getCurrentTime()
    document.querySelector('div.clock span#text').innerHTML = time
}

setInterval(() => setTimeText(), 500)

function mailToLingyunAwA() {
    window.open('mailto:1913532130@qq.com')
}
</script>

<template>
    <div class="navbar">
        <img src="../assets/logo.png" alt="RIT ToolKit Logo" />
        <div class="title">
            <span id="maintitle">RIT ToolKit</span>
            <p id="subtitle">by LingyunAwA</p>
        </div>
        <nav class="menu">
            <RouterLink link to="/Home">HomePage</RouterLink>
            <RouterLink link to="/About">About</RouterLink>
            <RouterLink link to="/Settings">Settings</RouterLink>
        </nav>
        <div class="clock">
            <svg
                t="1705465339705"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5101"
                width="24"
                height="24"
            >
                <path
                    d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 625.316262 1024 733.09232 987.060258 821.44823 919.93747 832.170355 911.792017 834.259159 896.496821 826.113707 885.774697 817.968254 875.052572 802.67306 872.963767 791.950935 881.10922 712.006355 941.842033 614.569408 975.238095 512 975.238095 256.160663 975.238095 48.761905 767.839337 48.761905 512 48.761905 256.160663 256.160663 48.761905 512 48.761905 767.839337 48.761905 975.238095 256.160663 975.238095 512 975.238095 606.738266 946.765111 697.157764 894.355733 773.603714 886.741822 784.709602 889.572629 799.884996 900.678517 807.498908 911.784403 815.112819 926.959799 812.282012 934.573709 801.176124 992.505146 716.675526 1024 616.659703 1024 512Z"
                    p-id="5102"
                ></path>
                <path
                    d="M487.619049 609.52381C487.619049 622.989037 498.534771 633.904762 512 633.904762 525.465229 633.904762 536.380951 622.989037 536.380951 609.52381L536.380951 243.809523C536.380951 230.344297 525.465229 219.428572 512 219.428572 498.534771 219.428572 487.619049 230.344297 487.619049 243.809523L487.619049 609.52381Z"
                    p-id="5103"
                ></path>
                <path
                    d="M481.586633 471.564079C472.719716 461.430462 457.316742 460.403597 447.183125 469.270511 437.049508 478.137425 436.022643 493.540401 444.889559 503.674018L615.556226 698.721636C624.42314 708.855253 639.826114 709.882118 649.959731 701.015204 660.093348 692.148288 661.120213 676.745314 652.253299 666.611697L481.586633 471.564079Z"
                    p-id="5104"
                ></path>
            </svg>
            <span id="text"></span>
        </div>
        <svg
            t="1705479298831"
            class="icon"
            id="report"
            @click="mailToLingyunAwA()"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8864"
            width="24"
            height="24"
        >
            <path
                d="M170.666667 896v0.021333c-0.426667 0.021333 0 0.426667 0 2.069334C170.666667 896.426667 170.24 896 170.666667 896z m682.666666-607.488V896H170.666667V170.666667h554.666666V128H170.474667C147.178667 128 128 146.176 128 168.576v729.514667C128 920.448 147.114667 938.666667 170.666667 938.666667h682.666666c23.68 0 42.666667-18.218667 42.666667-40.661334v-609.493333h-42.666667zM618.474667 519.701333a21.312 21.312 0 0 0 29.226666-7.530666l245.333334-416a21.354667 21.354667 0 0 0-36.757334-21.674667l-245.333333 416a21.333333 21.333333 0 0 0 7.530667 29.226667zM298.666667 384.021333h298.666666v-42.666666H298.666667v42.666666z m0 128h170.666666v-42.666666h-170.666666v42.666666z"
                p-id="8865"
            ></path>
        </svg>
    </div>
</template>

<style scoped lang="less">
div.navbar {
    display: flex;
    align-items: center;
    height: 90px;
    padding: 5px 20px;
    width: 100vw;
    border-bottom: 1px solid;
    img[alt='RIT ToolKit Logo'] {
        width: 48px;
        height: 48px;
    }
    div.title {
        display: block;
        margin: 0 40px 0 20px;
        width: 11.5vw;
        span#maintitle {
            font-size: 1.7rem;
        }
        p#subtitle {
            position: relative;
            top: -5px;
            padding-left: 50px;
        }
    }
    nav.menu {
        display: flex;
        width: 70vw;
        overflow-x: auto;
        white-space: nowrap;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        &::-webkit-scrollbar {
            display: none;
        }
        a[link] {
            display: inline-flex;
            height: 40px;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            border-radius: 3px;
            scroll-snap-align: center;
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    div.clock {
        display: flex;
        align-items: center;
        padding-right: 20px;
        border-right: 1px solid var(--color-text);
        span#text {
            color: var(--color-text);
            margin-left: 10px;
            font-size: 1.4rem;
            position: relative;
            top: -1px;
        }
    }
}
</style>
