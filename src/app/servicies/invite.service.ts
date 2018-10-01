import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InviteService {


  constructor(public http: HttpClient) {
   }
   getInvites() {
    return  this.http.get('http://localhost:53761/api/Guest_Invites');
  }


  addInvite(invite) {
    return this.http.post('http://localhost:53761/api/Guest_Invites', invite);
  }



  deleteMember(id) {
    return this.http.delete('http://localhost:53761/api/Members/' + id);
  }

  updateMember(member) {
    return this.http.put('http://localhost:53761/api/Members/' + member.id, member);
  }
}
