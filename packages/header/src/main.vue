<template>
  <header class="sd-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'SdHeader',

    componentName: 'SdHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
