import SdTabs from './src/tabs';

/* istanbul ignore next */
SdTabs.install = function(Vue) {
  Vue.component(SdTabs.name, SdTabs);
};

export default SdTabs;
