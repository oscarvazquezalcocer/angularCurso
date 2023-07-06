import { Component } from '@angular/core';
import { INote } from 'src/shared/data';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {
  notes:INote[]=[];
  constructor(
    private noteservice:NotesService){
      this.noteservice.list().subscribe( response => {
        this.notes = [...response.Items];
        console.log(this.notes);
      })
    }

  displayedColumns: string[] = ['id', 'description', 'date', 'status'];
  
  get dataSource() {
    return this.notes;
  }
  
}
