<template>
  <div class="sd-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`sd-collapse-content-${id}`"
      :aria-describedby ="`sd-collapse-content-${id}`"
    >
      <div
        class="sd-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`sd-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="sd-collapse-item__arrow sd-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <sd-collapse-transition>
      <div
        class="sd-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`sd-collapse-head-${id}`"
        :id="`sd-collapse-content-${id}`"
      >
        <div class="sd-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </sd-collapse-transition>
  </div>
</template>
<script>
  import SdCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import Emitter from 'element-ui/src/mixins/emitter';
  import { generateId } from 'element-ui/src/utils/util';

  export default {
    name: 'SdCollapseItem',

    componentName: 'SdCollapseItem',

    mixins: [Emitter],

    components: { SdCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('SdCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('SdCollapse', 'item-click', this);
      }
    }
  };
</script>
