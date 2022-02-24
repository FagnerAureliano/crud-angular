// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  homolog: false,
  development: true,

  version: '1.3.5',

  KEYCLOAK_URL: 'http://localhost:8190/auth',
  KEYCLOAK_REALM: 'FAB',
  KEYCLOAK_CLIENT_ID: 'sisplaer',

  // SISPLAER_API: 'https://localhost:8443/api/v1',
  SISPLAER_API: 'https://jsonplaceholder.typicode.com',
  SISPLAER_FRONT_URL: 'http://localhost:4200/sisplaer-3.0',

  PLANEJAMENTO_FRONT_URL: 'http://localhost:4201/sisplaer-3.0-planejamento',

  CREDITO_FRONT_URL: 'http://localhost:4204/sisplaer-3.0-credito',

  DEFAULT_PAGE_SIZE: 20,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
