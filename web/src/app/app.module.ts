/**这个文件是Angular 根模块，告诉Angular如何组装应用 */

//BrowserModule ： 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//Angular 核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//根组件模块
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';



//引入并且配置服务
import { StorageService } from  './services/storage.service'





/**@NgModule 装饰器：@NgModule 接受一个【元数据对象】，告诉Angular 如何编译和启动程序  */
@NgModule({
  declarations: [  /**配置当前项目运行的组件 */
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, SearchComponent, TodolistComponent
  ],
  imports: [ /**配置当前模块运行依赖的其他模块 */
    BrowserModule,
    FormsModule
  ],
  providers: [ /**配置项目所需要的服务 */
    StorageService
  ],
  bootstrap: [AppComponent] /**指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用，这里一般写的是根组件 */
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
