import { Component, OnInit } from '@angular/core';
import { InviteService } from '../../servicies/invite.service';


@Component({
  selector: 'app-free-invite',
  templateUrl: './free-invite.component.html',
  styleUrls: ['./free-invite.component.css']
})
export class FreeInviteComponent implements OnInit {



  invites: any;

  invite: any = {
    MemberID: '',
    GuestName: '',
    GuestMNumber: '',
    GuestFeedback: ''
  };




  constructor(public inviteService: InviteService) { }


  ngOnInit() {
    this.inviteService.getInvites().subscribe(data => {
      this.invites = data;
      console.log(data);
    });

  }



  onSubmit() {

    this.inviteService.addInvite(this.invite).subscribe(invite => {
      console.log(invite);
      this.inviteService.getInvites().subscribe(data => {
        this.invites = data;
        console.log(data);
      });

    });
  }



}
