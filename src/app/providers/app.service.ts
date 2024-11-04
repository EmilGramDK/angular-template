import { Injectable } from '@angular/core';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public initialLoading = true;
  public isLoading = true;

  constructor(private apiService: APIService) {
    this.initialize();
  }

  private async initialize() {
    const [users] = await Promise.all([this.apiService.getAllUsers()]);

    console.log('Fetched all users:', users);

    this.toggleLoading(false, true);
  }

  public toggleLoading(loading: boolean, initial: boolean = false) {
    this.isLoading = loading;
    if (initial) this.initialLoading = loading;
  }
}
