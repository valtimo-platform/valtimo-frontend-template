// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {NgxLoggerLevel} from 'ngx-logger';
import {ROLE_ADMIN, ROLE_DEVELOPER, ROLE_USER, ValtimoConfig, UploadProvider, IncludeFunction} from '@valtimo/config';
import {authenticationKeycloak} from './auth/keycloak-config';
import {defaultDefinitionColumns} from './columns';

export const environment: ValtimoConfig = {
  production: false,
  initializers: [],
  authentication: authenticationKeycloak,
  menu: {
    menuItems: [
      {roles: [ROLE_USER], link: ['/'], title: 'Dashboard', iconClass: 'icon mdi mdi-view-dashboard', sequence: 0},
      {roles: [ROLE_USER], title: 'Dossiers', iconClass: 'icon mdi mdi-layers', sequence: 1, children: []},
      {roles: [ROLE_USER], link: ['/tasks'], title: 'Tasks', iconClass: 'icon mdi mdi-check-all', sequence: 2},
      {
        roles: [ROLE_ADMIN],
        title: 'Objects',
        iconClass: 'icon mdi mdi-archive',
        sequence: 3,
        includeFunction: IncludeFunction.ObjectManagementEnabled,
      },
      {roles: [ROLE_USER], link: ['/analysis'], title: 'Analysis', iconClass: 'icon mdi mdi-chart-bar', sequence: 4},
      {
        roles: [ROLE_ADMIN], title: 'Admin', iconClass: 'icon mdi mdi-tune', sequence: 5, children: [
          {title: 'Basics', textClass: 'text-dark font-weight-bold c-default', sequence: 1},
          {link: ['/processes'], title: 'Processes', sequence: 2},
          {link: ['/form-management'], title: 'Forms', sequence: 3},
          {link: ['/decision-tables'], title: 'Decision tables', sequence: 4},
          {link: ['/dossier-management'], title: 'Dossiers', sequence: 5},
          {
            link: ['/object-management'],
            title: 'Objects',
            sequence: 6,
            includeFunction: IncludeFunction.ObjectManagementEnabled,
          },
          {link: ['/connectors'], title: 'Connectors', sequence: 7},
          {link: ['/plugins'], title: 'Plugins', sequence: 8},
          {link: ['/form-links'], title: 'Form links', sequence: 9},
          {link: ['/process-links'], title: 'Form links Plugin', sequence: 10},
          {link: ['/dashboard-management'], title: 'Dashboard configuration', sequence: 10},
          {title: 'A&E', textClass: 'text-dark font-weight-bold c-default', sequence: 11},
          {link: ['/contexts'], title: 'Contexts', sequence: 12},
          {link: ['/users'], title: 'Users', sequence: 13},
          {link: ['/entitlements'], title: 'Entitlements', sequence: 14},
          {title: 'Other', textClass: 'text-dark font-weight-bold c-default', sequence: 15},
          {link: ['/process-migration'], title: 'Process migration', sequence: 16},
          {link: ['/choice-fields'], title: 'Choice fields', sequence: 17},
        ]
      },
      {
        roles: [ROLE_DEVELOPER], title: 'Development', iconClass: 'icon mdi mdi-code', sequence: 5, children: [
          {link: ['/swagger'], title: 'Swagger', iconClass: 'icon mdi mdi-dot-circle', sequence: 1}
        ]
      }
    ]
  },
  whitelistedDomains: ['localhost:4200'],
  mockApi: {
    endpointUri: window['env']['mockApiUri'] || '/mock-api/'
  },
  valtimoApi: {
    endpointUri: window['env']['apiUri'] || '/api/'
  },
  swagger: {
    endpointUri: window['env']['swaggerUri'] || '/v3/api-docs'
  },
  logger: {
    level: NgxLoggerLevel.TRACE
  },
  definitions: {
    dossiers: []
  },
  openZaak: {
    catalogus: window['env']['openZaakCatalogusId'] || ''
  },
  uploadProvider: UploadProvider.S3,
  defaultDefinitionTable: defaultDefinitionColumns,
  customDefinitionTables: {
    leningen: [
      ...defaultDefinitionColumns,
      {propertyName: '$.voornaam', translationKey: 'firstName', sortable: true},
      {propertyName: 'relatedFiles', translationKey: 'files', sortable: true, viewType: 'relatedFiles'}
    ]
  },
  customTaskList: {
    fields: [
      {
        propertyName: 'created',
        translationKey: 'created',
        sortable: true
      },
      {
        propertyName: 'name',
        translationKey: 'name',
        sortable: true
      },
      {
        propertyName: 'assignee',
        translationKey: 'valtimoAssignee.fullName',
      },
      {
        propertyName: 'due',
        translationKey: 'due',
        sortable: true
      },
    ],
    defaultSortedColumn: {
      isSorting: true,
      state: {
        name: 'created',
        direction: 'ASC'
      }
    },
  },
  featureToggles: {
    disableFormFlow: false,
    showUserNameInTopBar: true,
    enableObjectManagement: true,
    caseSearchFields: true,
    caseListColumn: true,
    sortFilesByDate: true,
    returnToLastUrlAfterTokenExpiration: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
