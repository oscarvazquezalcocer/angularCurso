import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';

const routes: Routes = [
  { path:"", component:NotesComponent},
  { path: "create_note", component:CreateNoteComponent},
  { path: "update_note", component:UpdateNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
