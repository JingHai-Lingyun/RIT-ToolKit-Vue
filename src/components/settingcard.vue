<script>
import { useThemeStore } from '@/stores/store'

export default {
    props: {
        cardTitle: String,
        cardSubTitle: String,
        cardType: String
    },
    data() {
        return {
            showCardMain: false,
            options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
                { label: 'Use System Default', value: 'auto' }
            ],
            selectedOption: localStorage.getItem('theme')
        }
    },
    methods: {
        toggleCardMain() {
            this.showCardMain = !this.showCardMain
        },
        themeSettingChanged(value) {
            if (value == 'light' || value == 'dark' || value == 'auto') {
                var ThemeStore = useThemeStore()
                ThemeStore.setTheme(value)
            }
        }
    }
}
</script>

<template>
    <div class="settingcard">
        <div class="cardhead" @click="toggleCardMain">
            <div class="titles">
                <h2 class="title">{{ cardTitle }}</h2>
                <h5 class="subtitle">{{ cardSubTitle }}</h5>
            </div>
            <div class="cardheadRight">
                <div class="bg">
                    <svg
                        t="1705600489999"
                        class="icon"
                        :class="{ 'open': this.showCardMain }"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5185"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z"
                            p-id="5186"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="cardmain" :class="{ showCardMain: showCardMain }" ref="cardmain">
            <div class="options">
                <div class="oneOption" v-for="option in options">
                    <label :key="option.value">
                        <input
                            type="radio"
                            v-model="selectedOption"
                            :value="option.value"
                            :name="'ThemeSelect'"
                            @click="themeSettingChanged(option.value)"
                        />
                        {{ option.label }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
div.settingcard {
    border-radius: 5px;
    overflow: hidden;
    margin: 20px 70px 0;
    div.cardhead {
        height: 70px;
        background-color: var(--card-head);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        div.cardheadRight {
            margin-left: auto;
            position: relative;
            top: -3px;
            right: 20px;
            div.bg{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                background-color: rgba(0,0,0,0);
                transition: background-color 0.3s ease-in-out;
                svg{
                    transform: none;
                    transition: transform 0.4s ease-in-out;
                    &.open{
                        transform: rotate(180deg);
                    }
                }
            }
        }
        &:hover div.cardheadRight div.bg{
            background-color: var(--card-head-hover);
        }
        div.titles {
            display: block;
            h2.title {
                margin-left: 20px;
                font-size: 1.3rem;
                font-weight: 300;
            }
            h5.subtitle {
                margin-left: 20px;
            }
        }
    }
    div.cardmain {
        display: flex;
        flex-direction: column;
        background-color: var(--card-main);
        padding: 0 80px;
        height: 0;
        overflow: hidden;
        transition:
            height 0.5s ease-in-out,
            padding-top 0.6s ease-in-out;
        &.showCardMain {
            padding: 20px 80px;
            height: 152px;
        }
        div.oneOption {
            margin-bottom: 20px;
            label{
                cursor: pointer;
                input{
                    cursor: pointer;
                }
            }
            &:last-child {
                margin: 0;
            }
        }
    }
}

input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: relative;
}

input[type='radio']::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00bd7e;
    outline: 1px solid var(--color-background-soft);
}

input[type='radio']:checked::before {
    background-color: #00b7bd;
}
</style>
