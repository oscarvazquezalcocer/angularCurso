import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path:"", component:HomeComponent,
  children:[
    { path:"", component:ContentComponent},
    { path: "notes", loadChildren: ()=>import("../notes/notes.module").then(m=>m.NotesModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
