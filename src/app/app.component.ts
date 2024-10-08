import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, SidebarFooter } from '@emilgramdk/ngx-layout';
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
  footer?: SidebarFooter;
  protected readonly toast = toast;

  constructor(
    public appService: AppService,
    public authService: AuthService,
  ) {
    const tokenInfo = this.authService.getTokenInfo();

    this.footer = {
      title: tokenInfo?.user.username || 'User',
      subTitle: tokenInfo?.user.database || 'Database',
    };
  }

  showUser() {
    this.authService.showPopup('user');
  }
}
