import SdForm from './src/form';

/* istanbul ignore next */
SdForm.install = function(Vue) {
  Vue.component(SdForm.name, SdForm);
};

export default SdForm;
