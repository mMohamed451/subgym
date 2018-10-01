import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { MembersComponent } from './components/members/members.component';
import { HomeComponent } from './components/home/home.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FreeInviteComponent } from './components/free-invite/free-invite.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'freeinvite',
        component: FreeInviteComponent

    },
    {
        path: 'todos',
        component: TodoComponent

    },
    {
        path: 'supplements',
        component: SupplementsComponent

    },
    {
        path: 'membersRegister',
        component: UserregistrationComponent
    },
    {
        path: 'members',
        component: MembersComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
