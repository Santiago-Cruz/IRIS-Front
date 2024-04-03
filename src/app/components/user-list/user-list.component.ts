import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  constructor (private userService: UserService) {}
  ngOnInit(){
    this.getCargos();
  }

  getCargos(){
    this.userService.getCargos().
    subscribe(
      res => console.log(res)
    )
  }
}
