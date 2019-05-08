import SdDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
SdDropdownMenu.install = function(Vue) {
  Vue.component(SdDropdownMenu.name, SdDropdownMenu);
};

export default SdDropdownMenu;
