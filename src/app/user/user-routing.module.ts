import { UserGitListComponent } from './user-git-list/user-git-list.component';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'users', component: UserGitListComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UserRoutingModule { }
