import { Injectable } from '@angular/core';
import { Mailbox } from '../model/Mailbox';
import {MailboxDAOArray} from '../data/dao/impl/MailboxDAOArray';
import {MenuCategoryDAOArray} from '../data/dao/impl/MenuCategoryDAOArray';
import {Observable} from 'rxjs';
import {MenuCategory} from '../model/MenuCategory';

@Injectable({
  providedIn: 'root'
})
export class DateHandlerService {

  private tasksDAOArray = new MailboxDAOArray();
  private categoryDAOArray = new MenuCategoryDAOArray();

  constructor() { }

  getAllTasks(): Observable<Mailbox[]> {
    return this.tasksDAOArray.getAll();
  }

  getAllCategories(): Observable<MenuCategory[]> {
    return this.categoryDAOArray.getAll();
  }

}
