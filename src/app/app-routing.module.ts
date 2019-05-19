import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadAdaptedDataComponent } from './load-adapted-data/load-adapted-data.component';

const routes: Routes = [
  {
    path: 'adapted-data', component: LoadAdaptedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
