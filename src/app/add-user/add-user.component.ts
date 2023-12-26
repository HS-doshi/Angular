import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  userform: FormGroup;

  constructor(private service: UserService, private fb: FormBuilder) {
    this.userform = fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {

  }
  OnAddUser() {
    if (this.userform.valid) {
      const user = new User(0, this.userform.value.name, this.userform.value.email);
      this.service.AddUser(user);
      this.userform.reset();
    }
  }
}
