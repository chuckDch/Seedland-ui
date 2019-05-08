<template>
  <footer class="sd-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'SdFooter',

    componentName: 'SdFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
