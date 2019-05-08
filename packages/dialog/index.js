import SdDialog from './src/component';

/* istanbul ignore next */
SdDialog.install = function(Vue) {
  Vue.component(SdDialog.name, SdDialog);
};

export default SdDialog;
