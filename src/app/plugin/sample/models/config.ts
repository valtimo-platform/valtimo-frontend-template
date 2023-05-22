import {PluginConfigurationData} from '@valtimo/plugin';

interface Config extends PluginConfigurationData {
  url: string;
  username: string;
  password: string;
}

export interface SampleActionConfig {
  sampleString: string;
}

export {Config};
