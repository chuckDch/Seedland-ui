import SdMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
SdMenuItem.install = function(Vue) {
  Vue.component(SdMenuItem.name, SdMenuItem);
};

export default SdMenuItem;
