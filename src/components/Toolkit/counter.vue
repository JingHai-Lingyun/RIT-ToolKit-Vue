<template>
  <div class="counter">
    <div v-if="title === $t('Default Title')">
      <input v-model="tempTitle" :placeholder= "$t('Enter title here')" @keyup.enter="confirmTitle">
      <button @click="confirmTitle">{{ $t('Confirm') }}</button>
    </div>
    <h1>{{ title }}</h1>
    <p>{{  $t('count') }}: {{ count }}</p>
    <button class="counter-button" @click="increment">{{ $t('Increment') }}</button>
    <button class="counter-button" @click="decrement">{{ $t('Decrement') }}</button>
    <button class="counter-button" @click="reset">{{ $t('Reset') }}</button>
  </div>
</template>

<script>
export default {
  name: 'my-counter',
  data() {
    return {
      count: 0,
      title: this.$t('Default Title'),
      tempTitle: ''
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
      this.title = this.$t('Default Title')
    },
    confirmTitle() {
      this.title = this.tempTitle
      this.tempTitle = ''
    }
  }
}
</script>
  
  <style scoped>
  .counter {
    text-align: center;
    margin-top: 50px;
  }
  
  .counter p {
    font-size: 2em;
    color: #42b983;
  }
  
  .counter button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
  }
  </style>