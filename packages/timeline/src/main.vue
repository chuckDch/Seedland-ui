<template>
  <ul class="sd-timeline"
    :class="{
      'is-reverse': reverse
    }">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'SdTimeline',

    props: {
      reverse: {
        type: Boolean,
        default: false
      }
    },

    provide() {
      return {
        timeline: this
      };
    },

    watch: {
      reverse: {
        handler(newVal) {
          if (newVal) {
            this.$slots.default = [...this.$slots.default].reverse();
          }
        },
        immediate: true
      }
    }
  };
</script>
