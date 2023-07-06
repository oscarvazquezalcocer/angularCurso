import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Component} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})


export class MaterialModule {
 }
