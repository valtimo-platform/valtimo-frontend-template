import {PluginSpecification} from '@valtimo/plugin';
import {SamplePluginConfigurationComponent} from './components/sample-plugin-configuration.component';
import {SAMPLE_PLUGIN_LOGO_BASE64} from './assets';

const samplePluginSpecification: PluginSpecification = {
  /*
  The plugin definition key of the plugin.
  This needs to be the same as the id received from the back-end
   */
  pluginId: 'sample',
  /*
  A component of the interface PluginConfigurationComponent, used to configure the plugin itself.
   */
  pluginConfigurationComponent: SamplePluginConfigurationComponent,
  // Points to a Base64 encoded string, which contains the logo of the plugin.
  pluginLogoBase64: SAMPLE_PLUGIN_LOGO_BASE64,
  /*
  For each language key an implementation supports, translation keys with a translation are provided below.
  These can then be used in configuration components using the pluginTranslate pipe or the PluginTranslationService.
  At a minumum, the keys 'title' and 'description' need to be defined.
  Each function key also requires a translation key. In this case, the key 'sample-action' is added.
   */
  pluginTranslations: {
    nl: {
      title: 'Sample',
      description: 'Sample',
      url: 'URL',
      username: 'gebruikersnaam',
      password: 'wachtwoord'
    },
    en: {
      title: 'Sample',
      description: 'Sample"',
      url: 'URL',
      username: 'username',
      password: 'password'
    }
  }
};

export {samplePluginSpecification};
