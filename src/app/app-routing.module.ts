import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: 'list'
  ,loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule) 
 },
  
  {path: '**', redirectTo: 'list', pathMatch: "full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
