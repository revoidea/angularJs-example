import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductComponent } from './product.component'

import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent,
     //组件会显示在 Product 根组件下
    children:[
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'pcontent',
        component:PcontentComponent
      }
    ]
  },
  //组件会显示在 app 根组件下
  {
    path:'plist',  
    component:PlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProductRoutingModule { }
