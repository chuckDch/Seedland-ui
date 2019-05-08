import SdCollapse from './src/collapse';

/* istanbul ignore next */
SdCollapse.install = function(Vue) {
  Vue.component(SdCollapse.name, SdCollapse);
};

export default SdCollapse;

