import SdInput from './src/input';

/* istanbul ignore next */
SdInput.install = function(Vue) {
  Vue.component(SdInput.name, SdInput);
};

export default SdInput;
