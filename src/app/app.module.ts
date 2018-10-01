/* Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Components */

import { AppComponent } from './app.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './components/members/members.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FreeInviteComponent } from './components/free-invite/free-invite.component';
import { TodoComponent } from './components/todo/todo.component';


/* Servicies */
import { MemberService } from './servicies/member-service.service';
import { ReportService } from './servicies/report.service';
import { SupplementService } from './servicies/supplement.service';
import { InviteService } from './servicies/invite.service';


@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    NavComponent,
    FooterComponent,
    MembersComponent,
    SidenavComponent,
    HomeComponent,
    SupplementsComponent,
    ReportsComponent,
    FreeInviteComponent,
    TodoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    MemberService,
    ReportService,
    InviteService,
    SupplementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
