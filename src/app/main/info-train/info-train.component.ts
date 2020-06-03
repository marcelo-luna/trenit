import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpTrenitaliaService } from 'src/app/http-trenitalia.service';

@Component({
  selector: 'app-info-train',
  templateUrl: './info-train.component.html',
  styleUrls: ['./info-train.component.css']
})
export class InfoTrainComponent implements OnInit {

  @Input() solution;
  selectedId: string;

  constructor(private route: ActivatedRoute, private httpTrenitaliaService: HttpTrenitaliaService) { }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));

    let response = this.httpTrenitaliaService.getDetails(this.selectedId);
    let teste = response.subscribe((info) => {
      console.log(info);
    });
  }

}
