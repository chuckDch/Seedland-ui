import SdProgress from './src/progress';

/* istanbul ignore next */
SdProgress.install = function(Vue) {
  Vue.component(SdProgress.name, SdProgress);
};

export default SdProgress;
