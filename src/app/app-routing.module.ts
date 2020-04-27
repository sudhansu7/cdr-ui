import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCdrComponent} from './components/add-cdr/add-cdr.component';
import {ListCdrComponent} from './components/list-cdr/list-cdr.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'add-crd'},
{path: 'add-cdr', component: AddCdrComponent},
{path: 'list-cdr', component: ListCdrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
