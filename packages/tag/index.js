import SdTag from './src/tag';

/* istanbul ignore next */
SdTag.install = function(Vue) {
  Vue.component(SdTag.name, SdTag);
};

export default SdTag;
