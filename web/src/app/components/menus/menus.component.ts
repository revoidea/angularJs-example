
/**
 * ViewChild获取dom节点
 * 
 * 1.在模板中给dom起一个名字
 * 
 * <div #myBox> 
      这是一个div 节点
    </div>


    2.在业务逻辑里面引入ViewChild
    import { Component, OnInit,ViewChild } from '@angular/core';


    3.写在类里面， 
    @ViewChild('myBox')  myBox:any;

    4.ngAfterViewInit()生命周期函数里面获取dom
    通过 this.myBox.nativeElement

 */


import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  
  //获取dom节点
  @ViewChild('myBox')  myBox:any;

  //获取子组件
  @ViewChild('header') header:any;


  constructor() { }


  /**
   * 组件和指令初始化完成，并不是真正的dom加载完成
   */
  ngOnInit(): void {
  }

  

  /**
   * 视图加载完成以后触发的方法，  dom加载完成 （建议把dom操作放在这个里面）
   * 
   * 1.可通过原生js的方式操作dom
   */
  ngAfterViewInit():void{

    console.log(this.myBox.nativeElement)

    this.myBox.nativeElement.style.color="red"



    //调用子组件里面的方法
    this.header.run()
  }



}
