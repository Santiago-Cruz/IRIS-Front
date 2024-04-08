import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage.service.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

// COMPONENTE LISTA DE PROPIETARIOS

export class UserListComponent implements OnInit{
  user: User[] = [];
  localStorageUsers= []

  

  constructor (
    private userService: UserService,
    private localStorageService: LocalStorageServiceService
    ) {}
  ngOnInit(){
    
    this.getUsers();
  }

  getUsers(): void{
    // METODO getUsers() retorna todos los propietarios
    // de la base de datos

    this.userService.getUsers().
    subscribe(
      (res: any) => {
        console.log(res);
        this.user= res.user;
      }
    )
  }
  deleteUser(id: string): void{
    // MEtodo deleteUser() actua al presionar el 
    // boton Delete, elimina un usuario de la base
    // de datos usando su _id

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
