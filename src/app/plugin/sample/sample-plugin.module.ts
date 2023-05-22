import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginTranslatePipeModule} from '@valtimo/plugin';
import {FormModule, InputModule, ParagraphModule, SelectModule} from '@valtimo/user-interface';
import {SamplePluginConfigurationComponent} from './components/sample-plugin-configuration.component';
import {SampleActionConfigurationComponent} from './components/sample-action-configuration.component';


@NgModule({
  declarations: [SamplePluginConfigurationComponent, SampleActionConfigurationComponent],
  imports: [
    CommonModule,
    PluginTranslatePipeModule,
    FormModule,
    InputModule,
    SelectModule,
    ParagraphModule
  ],
  exports: [SamplePluginConfigurationComponent, SampleActionConfigurationComponent]
})
export class SamplePluginModule {}
