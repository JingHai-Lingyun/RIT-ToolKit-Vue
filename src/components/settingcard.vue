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
            <div class="cardheadRight"></div>
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
        div.cardheadRight {
            margin-left: auto;
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
