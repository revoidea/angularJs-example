import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  //同步
  getDate(){
    console.log('这是一个服务数据')
  }


  //异步：使用回调函数获取数据
  getCallbackData(cb){

     setTimeout(() => {

       var username = '张三'

       //return username;// 不可行
       cb(username)
     },1000);
  }

 //异步：es6
  getPromiseData(){

    return new Promise((resolve,reject) => {

      setTimeout(() => {

        var username = '张三---Promise'
  
        resolve(username)
        //return username;// 不可行
       
      },3000);

    })  
 }


 //异步：rxjs
 getRxjsData(){

   return new Observable((observable) => {
    setTimeout(() => {
      var username = '张三---rxjs'
      observable.next(username)
    },3000);

   })
 }

  //多次执行 --- Promise
  getPromiseIntervalData(){

    return new Promise((resolve,reject) => {
      setInterval(() => {
          var username = '张三---Promise Interva'
          resolve(username)
      },1000)
    })
  }


  //多次执行 --- rxjs
  getRxjsIntervalData(){
    let count = 0
    return new Observable<any>((observable) => {
      
      setInterval(() => {
        count ++;
        var username = '张三 --- Rxjs-Interval' +count;
        observable.next(username);
      },2000)

    })
  }


  getRxjsIntervalNum(){
    let count = 0
    return new Observable<any>((observable) => {
      
      setInterval(() => {
        count ++ ;
        observable.next(count);
      },2000)

    })
  }


}
