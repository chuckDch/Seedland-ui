<script>
  import Emitter from 'seedland-ui/src/mixins/emitter';

  export default {
    name: 'SdCheckboxGroup',

    componentName: 'SdCheckboxGroup',

    mixins: [Emitter],

    inject: {
      sdFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.sdFormItem || {}).sdFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('SdFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="sd-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
