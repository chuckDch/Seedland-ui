import SdAutocomplete from './src/autocomplete';

/* istanbul ignore next */
SdAutocomplete.install = function(Vue) {
  Vue.component(SdAutocomplete.name, SdAutocomplete);
};

export default SdAutocomplete;
