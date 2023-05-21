import {PluginConfigurationData} from '@valtimo/plugin';

interface Config extends PluginConfigurationData {
  url: string;
  username: string;
  password: string;
}

export {Config};
