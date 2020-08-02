import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  public list:any[] = [];
  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < 11; index++) {
       this.list.push('这是第'+index+'新闻信息')

    }

  }

}
