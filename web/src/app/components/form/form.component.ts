import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username:'tom',
    sex:'2',
    city:'广州',
    hobby:[
      {
        title:'看书',
        checked:false
      },
      {
        title:'看电影',
        checked:false
      },
      {
        title:'打篮球',
        checked:false
      }

    ],
    mark:''
  }

  public citis:any[]=[
    {
      id:'1',
      name:'广州'
    },
    {
      id:'2',
      name:'东莞'
    },
    {
      id:'3',
      name:'佛山'
    },
    {
      id:'4',
      name:'深圳'
    },
    {
      id:'5',
      name:'潮州'
    },
    {
      id:'6',
      name:'中山'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.peopleInfo)
  }
}
