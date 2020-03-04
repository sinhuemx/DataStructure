import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.mode';
import  * as data from '../../../assets/data/sample_data.json';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  users: User[];


  constructor() {
    this.users = data
  }

  ngOnInit(): void {

  }




}
