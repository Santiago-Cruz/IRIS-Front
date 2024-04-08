import { Component, OnInit, ViewChild } from '@angular/core';
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


  usuario: User = {
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

  @ViewChild('emailInput') emailInput: any;

  // COMPONENTE FORMULARIO PARA CREAR O EDITAR USUARIOS

  constructor (
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageServiceService
  ) { }

  ngOnInit() {
    // Se determina si se creará o editará un
    // propietario, basandose en las rutas:
    //  /user/edit/id   
    //  o
    //  /user/create

      const params= this.activatedRoute.snapshot.params;
      if (Object.keys(params).length!==0){
        this.userService.getUser(params['id'])
        .subscribe(
          (res) => {
            console.log(res);
            this.usuario= res;
            this.edit= true;
          },
          err => console.log(err)
        )
      }
  }
  submitCargo(){
    // Metodo submitCargo() crea un nuevo propietario
    // accionado con el boton Save
    // Tambien se almacena la informacion en LocalStorage

    this.localStorageService.saveData(this.usuario.Id, this.usuario);
    this.userService.createUser(this.usuario).
    subscribe( 
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err));
  }

  updateCargo(){
    // Metodo updateCargo() actualiza un propietario
    // segun su id
    // Tambien se actualiza informacion en localStorage

    delete this.usuario.createdAt;

    this.localStorageService.removeData(this.usuario.Id);
    this.updateLocalStorage(this.usuario.Id);

    this.userService.updateUser(this.usuario.Id, this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user'])
      },
      err => console.log(err)
    )
  }

  updateLocalStorage(Id: string){
    // Funcion encargada de actualizar en localStorage
    // cuando se usa el boton Edit

    const NewUser = {
      TipoId: this.usuario.TipoId,
      Id: this.usuario.Id,
      Nombres: this.usuario.Nombres,
      Apellidos: this.usuario.Apellidos,
      Nacimiento: this.usuario.Nacimiento,
      Edad: this.usuario.Edad,
      Email: this.usuario.Email,
      Celular: this.usuario.Celular,
      Estado: this.usuario.Estado,
    }
    this.localStorageService.saveData(this.usuario.Id, NewUser);
  }
}
