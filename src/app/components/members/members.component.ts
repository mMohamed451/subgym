import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../servicies/member-service.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member: any;
  constructor(public service: MemberService) {

  }

  ngOnInit() {
    this.service.getMembers().subscribe(
      data => { this.member = data;
        console.log(this.member);
      });

  }

}

