import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './../dummy-users';
import { User } from '../common/user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() select = new EventEmitter<User>();

  selectedUser = DUMMY_USERS[randomIndex]

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user);
  }
}
