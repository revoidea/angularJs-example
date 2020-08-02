/**
 * 1.get传值 
 *  a.需要在routerLink 上加上 queryParams.值是一个对象
 * <a  [routerLink]="['/newscontent']" [queryParams]="{aid:key}" >{{item}}</a>
 * 
 * 2.接收值
 *  a.在接收参数的界面上需要引入router模块，并在构造函数里声明 模块
 * 引入：  import { ActivatedRoute} from '@angular/router'
 * 声明：
 * 
 * 
 */




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {

  constructor(
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    //获取get传值
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params['aid'])
    // })

    //获取动态路由传值
    this.route.params.subscribe(params=>{
      console.log(params)
    })
  }

}
