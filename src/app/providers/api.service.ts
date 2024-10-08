import { Injectable } from '@angular/core';
import { RequestService } from '@emilgramdk/ngx-auth-service';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private requestService: RequestService) {
    this.requestService.setSettings(config.apiURL, true);
  }

  public async getAllQRItems() {
    const route = '';

    return this.requestService
      .makeRequest<any>('GET', route)
      .then((response) => response.value);
  }
}
