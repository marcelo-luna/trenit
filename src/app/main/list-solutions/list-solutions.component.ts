import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/app/shared/models/Solution';

@Component({
  selector: 'list-solutions',
  templateUrl: './list-solutions.component.html',
  styleUrls: ['./list-solutions.component.css']
})
export class ListSolutionsComponent implements OnInit {

  @Input() solutions: Solution[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(){
    console.log(this.solutions);
  }

}
