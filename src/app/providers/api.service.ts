import { Injectable } from '@angular/core';
import { RequestService } from '@emilgramdk/ngx-auth-service';
import { config } from '../../config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private requestService: RequestService) {}

  public async getAllUsers(): Promise<User[]> {
    const route =
      'User?$select=id,first_name,last_name,email,login_name,user_no';

    return this.requestService
      .makeRequest<any>('GET', route)
      .then((response) => response.value);
  }
}
