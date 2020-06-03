import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTrainComponent} from './main/info-train/info-train.component';
import { MainComponent} from './main/main.component';

const routes: Routes = [
  { path: 'info/:id', component: InfoTrainComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
