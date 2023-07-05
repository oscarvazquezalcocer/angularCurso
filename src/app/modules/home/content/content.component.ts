import { Component } from '@angular/core';
import { IUser } from 'src/shared/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  users:IUser[]=[];
  constructor(){
    this.users.push({id:'1',
    create_on: '11/04/2022',
    update_on: '12/02/2023',
    name: 'Oscar',
    username: 'oscar.va',
    birthday: new Date("1988/09/29"),
    city: 'Merida',
  },{
    id:'2',
    create_on: '11/04/2022',
    update_on: '12/02/2023',
    name: 'Ernesto',
    username: 'ernesto.va',
    birthday: new Date("1990/05/08"),
    city: 'Merida',
  }
  )};

  displayedColumns: string[] = ['id', 'name', 'birthday', 'city'];
  dataSource = this.users;
}