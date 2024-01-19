<script>
export default {
    props: {
        cardTitle: String,
        cardSubTitle: String
    }
}
</script>

<template>
    <div class="authorcard">
        <div class="cardhead">
            <svg
                t="1704270951327"
                class="icon cardicon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6103"
                width="24"
                height="24"
            >
                <path
                    d="M171.1 861.3c5.9 3.7 12.6 5.6 19.3 5.6 5.3 0 10.7-1.2 15.6-3.6l446.9-215c12-5.8 19.8-17.6 20.4-30.9l8.9-202.6 19.6 12.5c6 3.9 12.7 5.7 19.4 5.7 11.9 0 23.5-5.9 30.3-16.6 10.7-16.7 5.8-39-10.9-49.7L721 354.3l44.3-51.2c6.8-7.9 9.9-18.4 8.4-28.7s-7.4-19.5-16.2-25.1L481.9 72.7c-8.8-5.6-19.6-7.2-29.6-4.2S434 78.6 429.7 88.1l-28 61.6-19.6-12.6c-16.7-10.7-39-5.8-49.7 10.9-10.7 16.7-5.8 39 10.9 49.7l17.8 11.4-181.1 92c-12 6.1-19.5 18.3-19.7 31.7l-5.7 497.7c-0.3 12.5 6 24.1 16.5 30.8z m512.5-573.9L659.8 315 463 189l15.1-33.2 205.5 131.6z m-252.3-33.2l91.2 58.4 89.6 57.4-9.7 222.8-313.1 150.7L431 522.2c24.7 1.1 49.3-10.7 63.6-33 21.4-33.4 11.7-77.7-21.7-99.1s-77.7-11.7-99.1 21.7c-14.3 22.3-14.7 49.5-3.4 71.5L227.9 705.8l4-350.3 199.4-101.3zM896.2 887.2l-704.2 0.1c-19.9 0-36 16.1-36 36s16.1 36 36 36l704.1-0.1c19.9 0 36-16.1 36-36s-16-36-35.9-36zM704.6 761.2c0 19.9 16.1 36 36 36h155.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H740.6c-19.9 0-36 16.2-36 36z"
                    p-id="6104"
                ></path>
            </svg>
            <div class="titles">
                <h2 class="title">{{ cardTitle }}</h2>
                <h5 class="subtitle">{{ cardSubTitle }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
div.authorcard {
    border-radius: 5px;
    overflow: hidden;
    margin: 20px 70px 0 0;
    div.cardhead {
        height: 70px;
        background-color: var(--card-head);
        display: flex;
        align-items: center;
        svg.cardicon {
            margin-left: 20px;
        }
        div.titles {
            display: block;
            margin-left: 20px;
            h2.title {
                font-size: 1.3rem;
                font-weight: 300;
            }
        }
    }
}
</style>
