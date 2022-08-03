<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Выбрать</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select-form",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      defaulyt: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
      console.log('change opton in selekt item')
    },
  },
};
</script>

<style></style>