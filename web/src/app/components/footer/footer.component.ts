import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



 //使用output的方式
  @Output() private outer = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }


  sentParent(){
    alert('11')
    this.outer.emit('我是子组件的数据')
  }

}
