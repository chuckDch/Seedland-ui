<template>
  <i :class="'sd-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'SdIcon',

    props: {
      name: String
    }
  };
</script>
