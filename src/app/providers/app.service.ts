import { Injectable } from '@angular/core';

import { AuthService } from '@emilgramdk/ngx-auth-service';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public initialLoading = true;
  public isLoading = true;

  constructor(
    private apiService: APIService,
    private authService: AuthService,
  ) {
    this.initialize();
  }

  private async initialize() {
    await Promise.all([
      // NOTE: Run all init api call at once.
    ]);

    this.toggleLoading(false, true);
  }

  public toggleLoading(loading: boolean, initial: boolean = false) {
    this.isLoading = loading;
    if (initial) this.initialLoading = loading;
  }
}
