import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title:any='这是一个标题'


  //图片路径
  public picUrl="http://share-video-project.oss-cn-hangzhou.aliyuncs.com/1d7e4cd5fb5b61bf1d6a8232a2be2cc8.jpg";

  public list:any[] = [
    {
      title:"新闻1"
    },
    {
      title:"新闻2"
    },
    {
      title:"新闻3"
    },
  ]

  public flag:boolean=true

  public orderStatus:number=1;/**1-已经支付 2-支付并且确认订单 3-已经发货 4-已经收货 5-无效 */


  public today:any=new Date()

  public keywords:any="这是默认值"

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('这是一个自定义方法')
  }

  runEvent(event){
    //ionic必须这样写
    let dom:any=event.target;
    dom.style.color="red"

  }

  getDate(){
    alert('获取到的数据：'+this.title)
  }

  keyDown(e){
   // console.log(e)
   if(e.keyCode==13){
     console.log('按了一下回车')
   }else{
     //e.target 获取dom对象
     console.log(e.target.value)
   }
  }

}
