import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTemplateComponent } from '../app/form-template/form-template.component';
import { FormReactiveComponent } from '../app/form-reactive/form-reactive.component';

const routes: Routes = [
  { path: '', component: FormTemplateComponent },
  { path: 'reactiveForm', component: FormReactiveComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
