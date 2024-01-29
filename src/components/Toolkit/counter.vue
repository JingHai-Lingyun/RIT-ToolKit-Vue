<template>
    <div class="counter">
      <p>{{  $t('count') }}: {{ count }}</p>
      <button @click="increment">{{ $t('Increment') }}</button>
      <button @click="decrement">{{ $t('Decrement') }}</button>
    </div>
  </template>
  
  <script>
  export default {
  name: 'my-counter',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
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