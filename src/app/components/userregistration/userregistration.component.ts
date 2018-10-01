import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../servicies/member-service.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-registration',
    templateUrl: './userregistration.component.html',
    styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {


    member: any = {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
        weight: '',
        height: '',
        desiredWeight: '',
        whyToJoinSubGym: '',
        gender: '',
        gymclass: ''
    };

    constructor(public memberService: MemberService) { }


    ngOnInit() {
    }

    onSubmit() {

        this.memberService.addMember(this.member).subscribe(member => {
            console.log(this.member);
            console.log(member);
        });
     }
}



