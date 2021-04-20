import {CommonDAO} from './CommonDAO';
import {Mailbox} from '../../../model/Mailbox';
import {MenuCategory} from '../../../model/MenuCategory';
import {Observable} from 'rxjs';


export interface MailboxDAO extends CommonDAO<Mailbox>{

  search(category: MenuCategory, searchText: string, status: boolean): Observable<Mailbox[]>;

  getCompletedCountInCategory(category: MenuCategory): Observable<number>;

  getUncompletedCountInCategory(category: MenuCategory): Observable<number>;

  getTotalCountInCategory(category: MenuCategory): Observable<number>;

  getTotalCount(): Observable<number>;

}
