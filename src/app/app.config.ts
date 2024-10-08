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
import { provideLayout } from '@emilgramdk/ngx-layout';

const authServiceConfig: AuthServiceConfig = {
  authURL: config.authURL,
  database: config.database,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAuthService(authServiceConfig),
    provideLayout({ titleSuffix: config.appName }),
    provideHttpClient(),
    provideAnimations(),
    { provide: APP_BASE_HREF, useValue: config.baseURL },
  ],
};
