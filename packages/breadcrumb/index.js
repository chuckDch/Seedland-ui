import SdBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
SdBreadcrumb.install = function(Vue) {
  Vue.component(SdBreadcrumb.name, SdBreadcrumb);
};

export default SdBreadcrumb;
