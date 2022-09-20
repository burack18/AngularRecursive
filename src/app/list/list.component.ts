import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }


  @Input("item")
  item:any={}

  ngOnInit(): void {
 
  }

}
