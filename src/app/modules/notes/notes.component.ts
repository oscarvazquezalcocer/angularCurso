import { Component } from '@angular/core';
import { INote } from 'src/shared/data';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {
  notes:INote[]=[];
  constructor(){
    this.notes.push({id:'1',
    create_on: '11/04/2022',
    update_on: '12/02/2023',
    description: 'nueva nota',
    date: '11/06/1988',
    status: true,
  }
  )};

  displayedColumns: string[] = ['id', 'description', 'date', 'status'];
  dataSource = this.notes;
}
