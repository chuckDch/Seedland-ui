import SdButton from './src/button';

/* istanbul ignore next */
SdButton.install = function(Vue) {
  Vue.component(SdButton.name, SdButton);
};

export default SdButton;
