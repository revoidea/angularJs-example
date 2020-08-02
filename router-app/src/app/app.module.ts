import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ProclamationComponent } from './components/proclamation/proclamation.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PcateComponent } from './components/proclamation/pcate/pcate.component';
import { PlistComponent } from './components/proclamation/plist/plist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ProductComponent,
    NewsContentComponent,
    ProductContentComponent,
    ProclamationComponent,
    WelcomeComponent,
    SettingComponent,
    PcateComponent,
    PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
