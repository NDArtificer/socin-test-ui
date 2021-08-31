import { AuthService } from './../../auth.service';
import { UserGit } from './userGit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-git-list',
  templateUrl: './user-git-list.component.html',
  styleUrls: ['./user-git-list.component.css']
})
export class UserGitListComponent implements OnInit {


  usersGit: UserGit[] = [];

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit( ): void {
    this.authservice.getUsersGit().subscribe(response => this.usersGit = response)
  }

}
