<template>
    <select v-model="modelValueCurent" @change="changeOption" class="select">
      <option disabled value="">select</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },

    data() {
    return {
      modelValueCurent:this.modelValue,  
    }},
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
  </script>
  
  <style scoped>
  .select {
    outline: none;
    border: none;
    height: 40px;
    font-size: 24px;
    color:  var(--vt-c-blue);
  }
  </style>