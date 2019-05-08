<template>
  <div style="margin: 20px;">
    <sd-input v-model="input" placeholder="请输入内容"></sd-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
