import { Component, OnInit } from '@angular/core';



/**生命周期函数演示 */
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {


  public msg:string="我是一个生命周期演示"

  constructor() { 

    console.log('00-构造函数执行了-----除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
  }


  ngOnChanges(){
    console.log('01-ngOnChanges执行了---当被绑定的输入属性的值发送变化时调用(父子组件传值的时候会触发，若没有父子组件传值，就不触发)')
  }


  /**需要记住 */
  ngOnInit(): void {
    console.log('02-ngOnInit执行了---请求数据一般放在这里')
  }


  ngDoCheck(){

    //写一些自定义操作
    console.log('03-ngDoCheck执行了---检测，并在发生Angular 无法或者不愿意自己检测的变化时做出反应')
  }

 
  ngAfterContentInit(){
    console.log('04-ngAfterContentInit执行了---当把内容投影进组件之后调用')
  }

  ngAfterContentChecked(){
    console.log('05-ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用')
  }

   /**需要记住 */
  ngAfterViewInit(){
      console.log('06-ngAfterViewInit执行了---初始化完组件视图及其子视图之后调用(dom操作放在这个里面)')
  }

  ngAfterViewChecked(){
    console.log('07-ngAfterViewChecked执行了---每次做完组件视图和子视图的变更检测之后调用')
  }

  /**需要记住 */
  ngOnDestroy(){
    console.log('08-ngOnDestroy执行了')
  }


}
