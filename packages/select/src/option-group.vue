<template>
  <ul class="sd-select-group__wrap" v-show="visible">
    <li class="sd-select-group__title">{{ label }}</li>
    <li>
      <ul class="sd-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'seedland-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'SdOptionGroup',

    componentName: 'SdOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('SdOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('SdOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
