import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.mode';
import  * as data from '../../../assets/data/sample_data.json';
import { TableService } from "../../services/table.service";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  public users: User[];
  public sliceNumber: number;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.setUsersData();
  }

  /**
   * Sets the retrieved users data into a local variable to be placed in the HTML
   */
  setUsersData() {
    // this.users = (data as any).default;
    this.sliceNumber = 15;
    this.tableService.getUsersData().subscribe((result) => {
      this.users = result;
    });
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

  /**
   * Sets the number of items that the user wants to show in the table.
   * @param numberOfItems Items to be shown in the table
   */
  onSlice(numberOfItems) {
    this.sliceNumber = numberOfItems;
  }

}
