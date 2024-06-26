import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CargoFormComponent } from './components/cargo-form/cargo-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/create',
    component: CargoFormComponent
  },
  {
    path: 'user/edit/:id',
    component: CargoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
