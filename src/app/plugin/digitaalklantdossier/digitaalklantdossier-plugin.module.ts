import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginTranslatePipeModule} from '@valtimo/plugin';
import {FormModule, InputModule, SelectModule} from '@valtimo/user-interface';
import {DigitaalKlantDossierPluginConfigurationComponent} from './components/digitaalklantdossier-plugin-configuration.component';

@NgModule({
  declarations: [DigitaalKlantDossierPluginConfigurationComponent],
  imports: [
    CommonModule,
    PluginTranslatePipeModule,
    FormModule,
    InputModule,
    SelectModule
  ],
  exports: [DigitaalKlantDossierPluginConfigurationComponent]
})
export class DigitaalklantdossierPluginModule {}
