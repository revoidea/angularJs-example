import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title = '这是一个新闻组件'

  public msg='新闻组件msg'

  //定义数据的时候，指定类型（推荐这种写法）
  username:string="张三"
  public student:any = '学生1'

  public tip:any;//只声明属性，不赋值  
  /**
   * 声明属性的几种方法：（默认为public）
   * 
   * pubilc 公有 *（默认） 可以在这个类里面使用，也可以在类外面使用
   * protected 保护类型    它只有在当前类和它的子类里面可以访问
   * private 私有  只有在当前类才可以访问这个属性
   * 
   */


  //定义数组
  public users:any[]=['tom','joy','anna','mark']



  constructor() { }

  ngOnInit(): void {
  }


}
