import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, ThemeService } from '@emilgramdk/ngx-layout';
import { AuthService } from '@emilgramdk/ngx-auth-service';
import { FormsModule } from '@angular/forms';
import { AppService } from './providers/app.service';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxSonnerToaster, CommonModule, LayoutComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly toast = toast;

  constructor(
    private themeService: ThemeService,
    public appService: AppService,
    public authService: AuthService,
  ) {
    this.themeService.setConfig({
      titleSuffix: 'Template Application',
      logo: {
        path: 'logo.svg',
        logoText: '',
      },
      footer: {
        title: this.authService.tokenInfo?.user.username || 'User',
        subTitle: this.authService.tokenInfo?.user.database || 'Database',
        onClick: () => this.authService.showPopup('user'),
      },
      helpCard: {
        description:
          'This is a template application. See the link below for more information on the libraries used.',
        links: [
          {
            title: 'Auth Documentation',
            link: 'https://www.npmjs.com/package/@emilgramdk/ngx-auth-service',
          },
          {
            title: 'Layout Documentation',
            link: 'https://www.npmjs.com/package/@emilgramdk/ngx-layout',
          },
          {
            title: 'PrimeNG Documentation',
            link: 'https://primeng.org/autocomplete',
          },
        ],
      },
    });
  }
}
