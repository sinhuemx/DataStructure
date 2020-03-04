import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.mode';
import  * as data from '../../../assets/data/sample_data.json';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  public users: User[];

  public sliceNumber: number;

  constructor() {
    this.users = (data as any).default;
  }

  ngOnInit(): void {
    this.sliceNumber = 15;
  }

  /**
   * Adds an user to the users array
   * @param itemData item to be added
   */
  addUser(itemData: User) {
    this.users.push(itemData);
  }

  /**
   * Removes a user based on the given id
   * @param userId Id of the user to be removed
   */
  removeUser(userId: number) {
    let indexToRemove = this.users.findIndex((user) => user.id === userId);
    this.users.splice(indexToRemove, 1);
  }

  onSlice(numberOfItems) {
    this.sliceNumber = numberOfItems;
  }

}
