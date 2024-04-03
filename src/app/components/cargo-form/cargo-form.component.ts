import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/interfaces/user';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css'],
})
export class CargoFormComponent implements OnInit{


  cargo: Cargo = {
    IdCargo: "",
    Nombre: "",
    Descripcion: "",
    Estado: false
  };
  constructor () { }

  ngOnInit() {
      
  }

  submitCargo(){
    console.log("HELLO")
    console.log(this.cargo)
  }
}
