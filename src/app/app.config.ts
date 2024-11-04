import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import {
  AuthServiceConfig,
  provideAuthService,
} from '@emilgramdk/ngx-auth-service';
import { config } from '../config';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

const authServiceConfig: AuthServiceConfig = {
  authURL: config.authURL,
  database: config.database,
  apiSettings: {
    apiURL: config.apiURL,
    transformKeys: true,
    retryCount: 0,
  },
  baseURL: config.baseURL,
  application: config.applicationName,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAuthService(authServiceConfig),
    provideHttpClient(),
    provideAnimations(),
    { provide: APP_BASE_HREF, useValue: config.baseURL },
  ],
};
