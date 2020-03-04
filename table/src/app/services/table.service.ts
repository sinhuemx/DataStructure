import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.mode';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url = '../../../assets/data/sample_data.json';

  constructor(private http: HttpClient) {}

  /**
   * Gets the data of the users from the given API
   */
  getUsersData() {
    return this.http.get<User[]>(this.url);
  }

}
