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
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
select {
  border: none;
  outline: none;
  text-align: center;
}
</style>
