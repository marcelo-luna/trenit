import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Solution } from 'src/app/shared/models/Solution';
import { HttpTrenitaliaService } from 'src/app/http-trenitalia.service';
import { Observable, } from 'rxjs';

@Component({
  selector: 'search-solution',
  templateUrl: './search-solution.component.html',
  styleUrls: ['./search-solution.component.css']
})
export class SearchSolutionComponent implements OnInit {

  userFrom: string = "Paese";
  userTo: string = "Padova";
  date: string;
  hour: string;
  solution = new Observable<Object>();
  //@Output() solutions: EventEmitter<Solution[]> = new EventEmitter();
  @Output() solutions = new EventEmitter<Solution[]>();
  teste = new Solution();
  stationOption: string[];

  constructor(private httpTrenitaliaService: HttpTrenitaliaService) {
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
    var slns: Solution[];
    
    var response = this.httpTrenitaliaService.getSolution(this.userFrom, this.userTo, this.date, this.hour);
    var teste = response.subscribe((solutions) => {
      slns = solutions;
      slns.map(x => x.departurestring = this.convert(x.departuretime));
    } );
    //console.log(teste);
    //Object.assign(teste, this.solutions);
    //Object.assign(this.solution, this.solutions);
    setTimeout(() => {
    this.solutions.emit(slns);
      
    }, 1200);
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
