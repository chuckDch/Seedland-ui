<template>
  <li class="sd-timeline-item">
    <div class="sd-timeline-item__tail"></div>

    <div v-if="!$slots.dot"
      class="sd-timeline-item__node"
      :class="[
        `sd-timeline-item__node--${size || ''}`,
        `sd-timeline-item__node--${type || ''}`
      ]"
      :style="{
        backgroundColor: color
      }"
    >
      <i v-if="icon"
        class="sd-timeline-item__icon"
        :class="icon"
      ></i>
    </div>
    <div v-if="$slots.dot" class="sd-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="sd-timeline-item__wrapper">
      <div v-if="!hideTimestamp && placement === 'top'"
        class="sd-timeline-item__timestamp is-top">
        {{timestamp}}
      </div>

      <div class="sd-timeline-item__content">
        <slot></slot>
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'"
        class="sd-timeline-item__timestamp is-bottom">
        {{timestamp}}
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'SdTimelineItem',

    inject: ['timeline'],

    props: {
      timestamp: String,

      hideTimestamp: {
        type: Boolean,
        default: false
      },

      placement: {
        type: String,
        default: 'bottom'
      },

      type: String,

      color: String,

      size: {
        type: String,
        default: 'normal'
      },

      icon: String
    }
  };
</script>
