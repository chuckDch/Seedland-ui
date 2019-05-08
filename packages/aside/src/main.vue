<template>
  <aside class="sd-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'SdAside',

    componentName: 'SdAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
