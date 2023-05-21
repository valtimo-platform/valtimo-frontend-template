import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@valtimo/layout';
import {TaskModule} from '@valtimo/task';
import {environment} from '../environments/environment';
import {SecurityModule} from '@valtimo/security';
import {
  BpmnJsDiagramModule,
  CardModule,
  MenuModule, registerDocumentenApiFormioUploadComponent, registerFormioFileSelectorComponent,
  registerFormioUploadComponent,
  WidgetModule
} from '@valtimo/components';
import {ChoicefieldModule} from '@valtimo/choicefield';
import {
  DefaultTabs,
  DossierDetailTabAuditComponent,
  DossierDetailTabDocumentsComponent,
  DossierDetailTabProgressComponent,
  DossierDetailTabSummaryComponent,
  DossierModule,
} from '@valtimo/dossier';
import {ProcessModule} from '@valtimo/process';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContextModule} from '@valtimo/context';
import {DashboardModule} from '@valtimo/dashboard';
import {DocumentModule} from '@valtimo/document';
import {AccountModule} from '@valtimo/account';
import {UserManagementModule} from '@valtimo/user-management';
import {AuthorityModule} from '@valtimo/authority';
import {ChoiceFieldModule} from '@valtimo/choice-field';
import {ResourceModule} from '@valtimo/resource';
import {FormModule} from '@valtimo/form';
import {SwaggerModule} from '@valtimo/swagger';
import {AnalyseModule} from '@valtimo/analyse';
import {ProcessManagementModule} from '@valtimo/process-management';
import {DecisionModule} from '@valtimo/decision';
import {MilestoneModule} from '@valtimo/milestone';
import {LoggerModule} from 'ngx-logger';
import {FormManagementModule} from '@valtimo/form-management';
import {ManagementContextModule} from '@valtimo/management';
import {FormLinkModule} from '@valtimo/form-link';
import {MigrationModule} from '@valtimo/migration';
import {DossierManagementModule} from '@valtimo/dossier-management';
import {BootstrapModule} from '@valtimo/bootstrap';
import {ConfigModule, ConfigService, MultiTranslateHttpLoaderFactory} from '@valtimo/config';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ConnectorManagementModule} from '@valtimo/connector-management';
import {PluginManagementModule} from '@valtimo/plugin-management';
import {PLUGINS_TOKEN} from '@valtimo/plugin';
import {DigitaalklantdossierPluginModule} from './plugin/digitaalklantdossier/digitaalklantdossier-plugin.module';
import {digitaalKlantDossierPluginSpecification} from './plugin/digitaalklantdossier/digitaalklantdossier.plugin.specification';
import {SamplePluginModule} from './plugin/sample/sample-plugin.module';
import {samplePluginSpecification} from './plugin/sample/sample.plugin.specification';

export function tabsFactory() {
  return new Map<string, object>([
    [DefaultTabs.summary, DossierDetailTabSummaryComponent],
    [DefaultTabs.progress, DossierDetailTabProgressComponent],
    [DefaultTabs.audit, DossierDetailTabAuditComponent],
    [DefaultTabs.documents, DossierDetailTabDocumentsComponent]
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CardModule,
    WidgetModule,
    BootstrapModule,
    ConfigModule.forRoot(environment),
    LoggerModule.forRoot(environment.logger),
    environment.authentication.module,
    SecurityModule,
    MenuModule,
    TaskModule,
    ChoicefieldModule,
    DossierModule.forRoot(tabsFactory),
    ProcessModule,
    BpmnJsDiagramModule,
    FormsModule,
    ReactiveFormsModule,
    ContextModule,
    DashboardModule,
    DocumentModule,
    AccountModule,
    UserManagementModule,
    AuthorityModule,
    ChoiceFieldModule,
    ResourceModule,
    FormModule,
    ManagementContextModule,
    AnalyseModule,
    SwaggerModule,
    ConnectorManagementModule,
    ProcessManagementModule,
    DecisionModule,
    MilestoneModule,
    FormManagementModule,
    FormLinkModule,
    MigrationModule,
    DossierManagementModule,
    PluginManagementModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: MultiTranslateHttpLoaderFactory,
        deps: [HttpBackend, ConfigService]
      }
    }),
    DigitaalklantdossierPluginModule,
    SamplePluginModule
  ],
  providers: [{
    provide: PLUGINS_TOKEN,
    useValue: [
      digitaalKlantDossierPluginSpecification,
      samplePluginSpecification
    ]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerFormioUploadComponent(injector);
    registerFormioFileSelectorComponent(injector);
    registerDocumentenApiFormioUploadComponent(injector);
  }
}
