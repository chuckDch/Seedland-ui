<template>
  <transition name="sd-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="sd-autocomplete-suggestion sd-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <sd-scrollbar
        tag="ul"
        wrap-class="sd-autocomplete-suggestion__wrap"
        view-class="sd-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="sd-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </sd-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';
  import Emitter from 'element-ui/src/mixins/emitter';
  import SdScrollbar from 'element-ui/packages/scrollbar';

  export default {
    components: { SdScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'SdAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('SdAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.sd-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
