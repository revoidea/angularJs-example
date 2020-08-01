import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //接受父组件传来的数据 (可以接收父组件传来的数据，也可以执行父组件的方法，两者的方式是一样的)
  @Input()  title:any;

  constructor() { }



  ngOnInit(): void {
  }



  run(){
    console.log('这是一个头部组件在运行')
  }

}
