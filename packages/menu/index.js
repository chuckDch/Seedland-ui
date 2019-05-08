import SdMenu from './src/menu';

/* istanbul ignore next */
SdMenu.install = function(Vue) {
  Vue.component(SdMenu.name, SdMenu);
};

export default SdMenu;
