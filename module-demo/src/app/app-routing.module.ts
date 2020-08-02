import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  //动态懒加载模块
  {
    path:'user',loadChildren:()=>import('./module/user/user.module').then(m=> m.UserModule)
  },
  {
    path:'article',loadChildren:()=>import('./module/article/article.module').then(m=>m.ArticleModule)
  },
  {
    path:'product',loadChildren:()=>import('./module/product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'**',
    redirectTo:'user'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
