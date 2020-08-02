import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//组件
import { HomeComponent } from './components/home/home.component'
import { NewsComponent } from './components/news/news.component'
import { ProductComponent } from './components/product/product.component'
import { NewsContentComponent} from './components/news-content/news-content.component'
import { ProductContentComponent} from './components/product-content/product-content.component'
import { ProclamationComponent } from './components/proclamation/proclamation.component'
import { WelcomeComponent } from './components/home/welcome/welcome.component'
import { SettingComponent } from './components/home/setting/setting.component'
import { PcateComponent } from './components/proclamation/pcate/pcate.component'
import { PlistComponent } from './components/proclamation/plist/plist.component'

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'welcome',
        component:WelcomeComponent
      },
      {
        path:'setting',
        component:SettingComponent
      },
      {
        path:'**', //任意路由
        redirectTo:'welcome'
      }
    ]

  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'newscontent/:id',component:NewsContentComponent
  },
  {
    path:'productcontent/:pid',component:ProductContentComponent
  },
  {
    path:'proclamation',
    component:ProclamationComponent,
    children:[
      {
        path:'pcate',
        component:PcateComponent
      },
      {
        path:'plist',
        component:PlistComponent
      },
      {
        path:'**', //任意路由
        redirectTo:'plist'
      }
    ]
  },
  //设置默认界面，可以设置任意界面
  {
    path:'**', //任意路由
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
