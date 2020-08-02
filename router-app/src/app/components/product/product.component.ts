import { Component, OnInit } from '@angular/core';

//引入模块
import { Router ,NavigationExtras} from '@angular/router'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  getDetail(){

    //路由跳转
    this.router.navigate(['/productcontent/','1234'])
  }

  getHome(){
    //路由跳转
    this.router.navigate(['/home'])
  }

  getNews(){

    //跳转并get传值
    let queryOption:NavigationExtras= {
       queryParams:{'aid':1245}
       
    }

    this.router.navigate(['/news'],queryOption)
  }
}
