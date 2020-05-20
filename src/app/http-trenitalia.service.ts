import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solution } from '../app/shared/models/Solution'
import { Station } from '../app/shared/models/Station'

@Injectable({
  providedIn: 'root'
})
export class HttpTrenitaliaService {

  solutions: Solution[];

  constructor(private http: HttpClient) {
   }

   getSolution(from: string, to: string, startDate: string, hour: string){
    return this.http.get<Solution[]>(`/msite/api/solutions?origin=${ from }&destination=${ to }&arflag=A&adate=${ startDate }&atime=${ hour }&adultno=1&childno=0&direction=A&frecce=false&onlyRegional=false`);
  }

  getAutoCompleteStation(station: string){
    console.log(`/msite/api/geolocations/locations?name=${ station }`);
    return this.http.get<Station[]>(`/msite/api/geolocations/locations?name=${ station }`);
  }
}