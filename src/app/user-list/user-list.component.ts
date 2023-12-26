import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private service: UserService) {

  }
  ngOnInit(): void {
    this.service.users$.subscribe(res => {
      this.users = res;
    })
  }
}
