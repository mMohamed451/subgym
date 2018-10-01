import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {


  constructor(public http: HttpClient) { }

  getReports() {
    return this.http.get('http://localhost:53761/api/Reports');
  }

  addReport(report) {
    return this.http.post('http://localhost:53761/api/Reports', report);
  }


  deleteReport(id) {
    return this.http.delete('http://localhost:53761/api/Reports/' + id);
  }

  updateReport(report) {
    return this.http.put('http://localhost:53761/api/Reports/' + report.id, report);
  }
}
