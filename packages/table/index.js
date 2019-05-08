import SdTable from './src/table';

/* istanbul ignore next */
SdTable.install = function(Vue) {
  Vue.component(SdTable.name, SdTable);
};

export default SdTable;
