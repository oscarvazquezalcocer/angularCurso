import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports:[
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ]
})

export class HomeModule { 

}
