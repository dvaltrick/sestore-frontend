import { CaixaComponent } from './caixa/caixa.component';
import { ImpostosComponent } from './impostos/impostos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'caixa', component:CaixaComponent},
  { path: 'impostos', component:ImpostosComponent},
  { path: '', redirectTo: '/caixa', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
