import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpTrenitaliaService } from '../http-trenitalia.service';
import { Observable } from 'rxjs';
import { Solution } from '../shared/models/Solution'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  solutions: Solution[] = [];

  constructor(private httpTrenitaliaService: HttpTrenitaliaService) {

   }

  ngOnInit(): void {

  }

  getSolutions(solutions){
    this.solutions = solutions;
    console.log(solutions);
  }
}
