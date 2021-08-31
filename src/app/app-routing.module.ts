import { UserGitListComponent } from './user/user-git-list/user-git-list.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path:   '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'users-git', component: UserGitListComponent},
      { path: '', redirectTo: '/login', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
