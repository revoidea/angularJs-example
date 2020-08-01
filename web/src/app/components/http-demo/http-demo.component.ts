import { Component, OnInit } from '@angular/core';


//当做一个服务
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { HttpserviceService } from '../../services/httpservice.service'

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {

  public list:any[] = [];
  constructor(
    public http:HttpClient,
    public httpservice:HttpserviceService

  ) { }

  ngOnInit(): void {

  }


  //get 请求
  getData(){
    // 服务器必须允许跨域
    let api = "http://a.tiying.com/api/productlist"

    this.http.get(api).subscribe((res:any) =>{
      console.log(res)
      this.list = res.result
    })
  }


  doLogin(){
    //post请求 需要设置请求头
    const httpOptions = { headers:new HttpHeaders({'Content-Type':'application/json'}) };
    var api = ''
    this.http.post(api,{"username":"tom","password":"1223"},httpOptions).subscribe((res:any) =>{
      console.log(res)
    })

  }

  getJsonpData(){

    /**jsonp请求 服务器必须得支持jsop
       如何验证：
       在url最后加上 callback=XXXXX,看返回的数据
    **/

    let api = ""
    this.http.jsonp(api,'callback').subscribe((res) => {
      console.log(res)
    })
  }


  getAxiosData(){
    let api = ""
    const ret = this.httpservice.axiosGet(api)
    console.log(ret)
  }

}
