import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplementService {

  supplements: string[];

  constructor(public http: HttpClient) { }

  getSupplements() {
    return this.http.get('http://localhost:53761/api/Supplements');
  }
}
