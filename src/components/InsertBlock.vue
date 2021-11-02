<template>
  <div ref="block" class="new-block">
    <slot />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { insertModes } from '../data';
import useInsert from '../composables/useInsert';

const props = defineProps({
  in: {
    type: String,
    default: 'body',
  },
  as: {
    type: String,
    default: 'append',
    validator: (v) => {
      console.log(insertModes.includes(v));
      return insertModes.includes(v)
    },
  }
})

const block = ref(null);
const { insert } = useInsert(props.in);

onMounted(() => {
  insert(props.as, block.value);
})
</script>

<style scoped>
.new-block {
  background-color: #8dfff6;
}
</style>