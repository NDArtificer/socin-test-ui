import { LayoutComponent } from './../layout/layout.component';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserGitListComponent } from './user-git-list/user-git-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserGitListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ]
})
export class UserModule { }
