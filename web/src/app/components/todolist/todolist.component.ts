import { Component, OnInit } from '@angular/core';

//引入服务
import { StorageService} from '../../services/storage.service'



/**
 * 服务在组件里面的使用
 * 
 * 1.引入服务
 * import { StorageService} from '../../services/storage.service'
 * 
 * 2.初始化
 *  constructor(
    public storage:StorageService
  ) {
    //可以调用服务的方法
  }
 * 
 */

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {


  public keywords:string;
  public todoList:any[] =[]


  constructor(
    public storage:StorageService
  ) {}

  //生命周期函数（页面每次刷新会触发）
  ngOnInit(): void {

     const todolist = this.storage.get('todolist')
     if(todolist){
       this.todoList=todolist
     }
  }

  doAdd(e){

    if(e.keyCode==13){
       
      if(!this.todolistHasKeyword(this.todoList,this.keywords)){
        this.todoList.push({
          title:this.keywords,
          state:0 // 0 -待办  1-已完成
        })
        this.keywords=''

        this.storage.set('todolist',this.todoList);  //用到this一定要注意this指向
      }else{
        alert('数据已经存在')
      }
    }
  }


  delete(key){
    this.todoList.splice(key,1);
    this.storage.set('todolist',this.todoList);  //用到this一定要注意this指向
  }

  todolistHasKeyword(list:any,keyword:any){

    //异步  会有问题，结果会是一直返回false
    // list.forEach(item => {
       
    //   if(item.title==keyword){
    //     return true
    //   }
    // });
    // return false

    
    //keyword 为空
    if(!keyword) return false;

    for (let index = 0; index < list.length; index++) {
    
      if(list[index].title==keyword){
        return true;
      }
    }
    return false;
  }


  checkChange(){
    this.storage.set('todolist',this.todoList); 
  }
}
