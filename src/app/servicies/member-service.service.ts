import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(public http: HttpClient) {
  }

  getMembers() {
    return this.http.get('http://localhost:53761/api/Members');
  }

  addMember(member) {
    return this.http.post('http://localhost:53761/api/Members', member);
  }



  deleteMember(id) {
    return this.http.delete('http://localhost:53761/api/Members/' + id);
  }

  updateMember(member) {
    return this.http.put('http://localhost:53761/api/Members/' + member.id, member);
  }

}
