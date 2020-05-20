import { Component, OnInit } from '@angular/core';
import { HttpTrenitaliaService } from '../http-trenitalia.service';
import { Observable } from 'rxjs';
import { Solution } from '../shared/models/Solution'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  userFrom: string = "Paese";
  userTo: string = "Padova";
  date: string;
  hour: string;
  solution = new Observable<Object>();
  solutions: Solution[];
  teste = new Solution();
  stationOption: string[];

  constructor(private httpTrenitaliaService: HttpTrenitaliaService) {
    this.solutions = [];
    this.teste.trainlist = [];
   }

  ngOnInit(): void {
    this.date = new Date().toISOString().substring(0,10);
    this.hour = new Date().getHours().toString();
  }

  getStations(search: string){
    var response = this.httpTrenitaliaService.getAutoCompleteStation(search);
     var teste = response.subscribe((stations) => {
      this.stationOption = stations.map(x => x.name);
     });
     console.log(this.stationOption);
  }

  onChangedFrom(event: any){
    this.getStations(event.target.value);
  }

  readText(){
    var response = this.httpTrenitaliaService.getSolution(this.userFrom, this.userTo, this.date, this.hour);
    var teste = response.subscribe((solutions) => {
        this.solutions = solutions;
        this.solutions.map(x => x.departurestring = this.convert(x.departuretime));
    } );
    //console.log(teste);
    //Object.assign(teste, this.solutions);
    //Object.assign(this.solution, this.solutions);
    console.log(teste);
  }

  invert(){
    var userFromTemp = this.userFrom;
    this.userFrom = this.userTo;
    this.userTo = userFromTemp;
  }

  convert(unixDate){

    // Unixtimestamp
  
    // Months array
    var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
   
    // Convert timestamp to milliseconds
    //var date = new Date(unixDate*1000);
    var date = new Date(unixDate);
    //var date = unixDate;
   
    // Year
    var year = date.getFullYear();
   
    // Month
    var month = months_arr[date.getMonth()];
   
    // Day
    var day = date.getDate();
   
    // Hours
    var hours = date.getHours();
   
    // Minutes
    var minutes = "0" + date.getMinutes();
   
    // Seconds
    var seconds = "0" + date.getSeconds();
   
    // Display date time in MM-dd-yyyy h:m:s format
    //var convdataTime = day+'-'+month+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var convdataTime = day+'-'+month+'-'+year+' '+hours + ':' + minutes.substr(-2);
    
    return convdataTime;
   }
}
