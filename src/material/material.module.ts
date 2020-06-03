import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'it-IT'} ],
  exports: [
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
    ]
})
export class MaterialModule { }
