import SdTableColumn from '../table/src/table-column';

/* istanbul ignore next */
SdTableColumn.install = function(Vue) {
  Vue.component(SdTableColumn.name, SdTableColumn);
};

export default SdTableColumn;
