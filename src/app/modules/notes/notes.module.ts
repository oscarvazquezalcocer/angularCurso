import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { NotesComponent } from '../notes/notes.component';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    CreateNoteComponent,
    UpdateNoteComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MaterialModule
  ],
  exports: [
    NotesComponent,
  ]
})
export class NotesModule { }
