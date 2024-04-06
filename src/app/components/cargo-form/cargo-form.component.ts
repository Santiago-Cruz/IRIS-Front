import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage.service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css'],
})
export class CargoFormComponent implements OnInit{


  user: User = {
    TipoId: '',
    Id: '',
    Nombres: '',
    Apellidos: '',
    Nacimiento: new Date(),
    Edad: '',
    Email: '',
    Celular: '',
    Estado: true,
  };

  edit: boolean= false;
  myId: string= "";

  constructor (
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageServiceService
  ) { }

  ngOnInit() {
      const params= this.activatedRoute.snapshot.params;
      if (Object.keys(params).length!==0){
        this.userService.getUser(params['id'])
        .subscribe(
          (res: User) => {
            console.log((res));
            this.user= res;
            this.edit= true;
          },
          err => console.log(err)
        )
      }
  }

  submitCargo(){
    this.localStorageService.saveData(this.user.Id, this.user);
    this.userService.createUser(this.user).
    subscribe( 
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err));
  }

  updateCargo(){
    delete this.user.createdAt;
    this.localStorageService.removeData(this.user.Id);
    this.updateLocalStorage(this.user.Id);
    this.userService.updateUser(this.user.Id, this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user'])
      },
      err => console.log(err)
    )
  }

  updateLocalStorage(Id: string){
    const NewUser = {
      TipoId: this.user.TipoId,
      Id: this.user.Id,
      Nombres: this.user.Nombres,
      Apellidos: this.user.Apellidos,
      Nacimiento: this.user.Nacimiento,
      Edad: this.user.Edad,
      Email: this.user.Email,
      Celular: this.user.Celular,
      Estado: this.user.Estado,
    }
    this.localStorageService.saveData(this.user.Id, NewUser);
  }
}
