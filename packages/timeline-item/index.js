import SdTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
SdTimelineItem.install = function(Vue) {
  Vue.component(SdTimelineItem.name, SdTimelineItem);
};

export default SdTimelineItem;
