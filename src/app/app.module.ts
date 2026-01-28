import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpBackend, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule, TranslationManagementModule} from '@valtimo/layout';
import {TaskModule} from '@valtimo/task';
import {environment} from '../environments/environment';
import {SecurityModule} from '@valtimo/security';
import {BuildingBlockManagementModule} from '@valtimo/building-block-management';
import {
  BpmnJsDiagramModule,
  enableCustomFormioComponents,
  MenuModule,
  registerFormioCurrencyComponent,
  registerFormioFileSelectorComponent,
  registerFormioUploadComponent,
  registerFormioValueResolverSelectorComponent,
  WidgetModule
} from '@valtimo/components';
import {
  DefaultTabs,
  CaseDetailTabAuditComponent,
  CaseDetailTabDocumentsComponent,
  CaseDetailTabNotesComponent,
  CaseDetailTabProgressComponent,
  CaseDetailTabSummaryComponent,
  CaseModule,
} from '@valtimo/case';
import {ProcessModule} from '@valtimo/process';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IkoModule} from '@valtimo/iko';
import {
  CaseCountDataSourceModule,
  CaseCountsDataSourceModule,
  CaseGroupByDataSourceModule,
  DashboardModule,
  DisplayWidgetTypesModule,
} from '@valtimo/dashboard';
import {DocumentModule} from '@valtimo/document';
import {AccountModule} from '@valtimo/account';
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
import {ProcessLinkModule} from '@valtimo/process-link';
import {MigrationModule} from '@valtimo/migration';
import {CaseManagementModule} from '@valtimo/case-management';
import {BootstrapModule} from '@valtimo/bootstrap';
import {ConfigModule, ConfigService, MultiTranslateHttpLoaderFactory} from '@valtimo/shared';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormFlowManagementModule} from '@valtimo/form-flow-management';
import {PluginManagementModule} from '@valtimo/plugin-management';
import {
  ObjectenApiPluginModule,
  objectenApiPluginSpecification,
  ObjectTokenAuthenticationPluginModule,
  objectTokenAuthenticationPluginSpecification,
  ObjecttypenApiPluginModule,
  objecttypenApiPluginSpecification,
  PLUGINS_TOKEN,
} from '@valtimo/plugin';
import {ObjectManagementModule} from '@valtimo/object-management';
import {ObjectModule} from '@valtimo/object';
import {AccessControlManagementModule} from '@valtimo/access-control-management';
import {DashboardManagementModule} from '@valtimo/dashboard-management';
import {CaseMigrationModule} from '@valtimo/case-migration';
import {LoggingModule} from '@valtimo/logging';
import {SseModule} from '@valtimo/sse';

export function tabsFactory() {
  return new Map<string, object>([
    [DefaultTabs.summary, CaseDetailTabSummaryComponent],
    [DefaultTabs.progress, CaseDetailTabProgressComponent],
    [DefaultTabs.audit, CaseDetailTabAuditComponent],
    [DefaultTabs.documents, CaseDetailTabDocumentsComponent],
    [DefaultTabs.notes, CaseDetailTabNotesComponent]
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    AccessControlManagementModule,
    AccountModule,
    AnalyseModule,
    AppRoutingModule,
    BootstrapModule,
    BpmnJsDiagramModule,
    BrowserModule,
    BuildingBlockManagementModule,
    CaseCountDataSourceModule,
    CaseCountsDataSourceModule,
    CaseGroupByDataSourceModule,
    CaseManagementModule,
    CaseMigrationModule,
    CaseModule.forRoot(tabsFactory),
    ChoiceFieldModule,
    CommonModule,
    ConfigModule.forRoot(environment),
    DashboardManagementModule,
    DashboardModule,
    DashboardModule,
    DecisionModule,
    DisplayWidgetTypesModule,
    DocumentModule,
    FormFlowManagementModule,
    FormManagementModule,
    FormModule,
    FormsModule,
    IkoModule,
    LayoutModule,
    LoggerModule.forRoot(environment.logger),
    LoggingModule,
    MenuModule,
    MigrationModule,
    MilestoneModule,
    ObjectManagementModule,
    ObjectModule,
    ObjectTokenAuthenticationPluginModule,
    ObjectenApiPluginModule,
    ObjecttypenApiPluginModule,
    PluginManagementModule,
    ProcessLinkModule,
    ProcessManagementModule,
    ProcessModule,
    ReactiveFormsModule,
    ResourceModule,
    SecurityModule,
    SseModule,
    SwaggerModule,
    TaskModule,
    TranslationManagementModule,
    WidgetModule,
    environment.authentication.module,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: MultiTranslateHttpLoaderFactory,
        deps: [HttpBackend, ConfigService]
      }
    }),
  ],
  providers: [
    {
      provide: PLUGINS_TOKEN,
      useValue: [
        objectenApiPluginSpecification,
        objecttypenApiPluginSpecification,
        objectTokenAuthenticationPluginSpecification
      ]
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    enableCustomFormioComponents(injector)
    registerFormioCurrencyComponent(injector);
    registerFormioUploadComponent(injector);
    registerFormioFileSelectorComponent(injector);
    registerFormioValueResolverSelectorComponent(injector);
  }
}
