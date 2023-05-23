import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginTranslatePipeModule} from '@valtimo/plugin';
import {FormModule, InputModule, SelectModule} from '@valtimo/user-interface';
import {SamplePluginConfigurationComponent} from './components/sample-plugin-configuration.component';

@NgModule({
  declarations: [SamplePluginConfigurationComponent],
  imports: [
    CommonModule,
    PluginTranslatePipeModule,
    FormModule,
    InputModule,
    SelectModule
  ],
  exports: [SamplePluginConfigurationComponent]
})
export class SamplePluginModule {}
