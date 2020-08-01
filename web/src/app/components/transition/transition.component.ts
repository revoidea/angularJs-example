import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showSide(){

   // 原生js取dom节点
    let dom:any = document.getElementById("aside")
    dom.style.transform="translate(0,0)"
  }

}
