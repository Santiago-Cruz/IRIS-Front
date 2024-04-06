import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage.service.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  user: User[] = [];
  localStorageUsers= []

  constructor (
    private userService: UserService,
    private localStorageService: LocalStorageServiceService
    ) {}
  ngOnInit(){
    console.log(this.localStorageService.getAllData())
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().
    subscribe(
      (res: any) => {
        console.log(res);
        this.user= res.user;
      }
    )
  }
  deleteUser(id: string): void{
    this.localStorageService.removeData(id);
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          this.getUsers();
        },
        err => console.log(err)
      )

  }

}
