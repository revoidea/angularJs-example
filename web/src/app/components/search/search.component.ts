import { Component, OnInit } from '@angular/core';

//引入服务
import { StorageService } from '../../services/storage.service'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keywords:string;
  public historyList:any[]=[];


  constructor(
    public storage:StorageService
  ) { }

  //生命周期函数（页面每次刷新会触发）
  ngOnInit(): void {

    const searchList = this.storage.get('searchList')
    if(searchList){
      this.historyList = searchList
    }
  }

  doSearch(){
    if(this.historyList.indexOf(this.keywords)==-1){
      this.historyList.push(this.keywords)
      
      this.storage.set('searchList',this.historyList)
    }
    this.keywords=''
    console.log(this.keywords)
  }

  deleteHistory(key){
    this.historyList.splice(key,1);
    this.storage.set('searchList',this.historyList)
  }
}
