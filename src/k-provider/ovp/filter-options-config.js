//@flow
import {clone} from '../../util/clone';

const defaultConfig: ProviderFilterOptionsObject = {
  redirectFromEntryId: true
};

class FilterOptionsConfiguration {
  static set(clientConfig?: ProviderOptionsObject) {
    if (clientConfig.filterOptions) {
      Object.assign(defaultConfig, clientConfig.filterOptions);
    }
  }

  static get(): Object {
    return clone(defaultConfig);
  }
}

export {FilterOptionsConfiguration};
