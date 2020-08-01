import { Component, OnInit } from '@angular/core';
import { RequestService} from '../../services/request.service'

import {map,filter } from  'rxjs/operators'



/**
 * 演示Rxjs 异步数据流编程 
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public requst:RequestService
  ) { }

  ngOnInit(): void {

    //1.同步方法
     let data = this.requst.getDate();
     console.log(data)

    /**
     * 2. callback获取异步数据：采用传入一个回调函数来获取异步数据
     * 
     */
     this.requst.getCallbackData((data) => {
       console.log(data)
     })

     //3. promise获取异步数据
     var promiseData = this.requst.getPromiseData();
     promiseData.then((data) => {
       console.log(data);
     })


     //4.rxjs获取异步方法里面的数据
    //  var rxjsData = this.requst.getRxjsData();
    //  rxjsData.subscribe((data) => {
    //    console.log(data)
    //  })


     //5. 过一秒后撤回刚才的操作
     var rxjsData = this.requst.getRxjsData();
     var d=rxjsData.subscribe((data) => {
       console.log(data)
     })
     setTimeout(() => {
       d.unsubscribe();//取消订阅
     },1000)


    //6. promise 执行多次（没有这个能力）
     var promiseIntervalData = this.requst.getPromiseIntervalData()
     promiseIntervalData.then((data) => {
        console.log(data)
     })


     //7. rxjs执行多次
    //  var  streamInterval = this.requst.getRxjsIntervalData()
    //  streamInterval.subscribe((data) => {
    //    console.log(data);
    //  })


    // 8.用工具方法对返回的数据进行处理
  //   var streamNum = this.requst.getRxjsIntervalNum();
  //   streamNum.pipe(
  //     filter((value) =>{
  //       if(value%2==0){
  //         return true
  //       }
  //     })
  //   )
  //   .subscribe((data) => {
  //     console.log(data);
  //   })
  // }

  
  // var streamNum = this.requst.getRxjsIntervalNum();
  // streamNum.pipe(
  //   map((value) =>{
  //    return value*value;
  //   })
  // )
  // .subscribe((data) => {
  //   console.log(data);
  // })



  var streamNum = this.requst.getRxjsIntervalNum();
  streamNum.pipe(
    filter((value) =>{
      if(value%2==0){
        return true
      }
    }),
    map((value) =>{
     return value*value;
    })
  )
  .subscribe((data) => {
    console.log(data);
  })
}


 

  
}
