import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../servicies/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any;

  report: any = {
    ReportTxt: '',
    Suggest: '',
  };

  constructor(public service: ReportService) { }

  ngOnInit() {
   this.getReports();
  }

  getReports () {
    this.service.getReports().subscribe(data => {
      this.reports = data;
      console.log(this.reports);
    });
  }
  onSubmit() {

    this.service.addReport(this.report).subscribe(report => {
      console.log(report);
      console.log(this.report);

      this.service.getReports().subscribe(data => {
        this.reports = data;
      });


    });
  }

}
