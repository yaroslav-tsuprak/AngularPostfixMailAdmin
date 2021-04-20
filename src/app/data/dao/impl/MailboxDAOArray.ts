import {MailboxDAO} from '../interface/MailboxDAO';
import {Mailbox} from '../../../model/Mailbox';
import {Observable, of} from 'rxjs';
import {TestData} from '../../TestData';
import {MenuCategory} from '../../../model/MenuCategory';

export class MailboxDAOArray implements MailboxDAO {
  add(T): Observable<Mailbox> {
    return undefined;
  }

  delete(id: number): Observable<Mailbox> {
    return undefined;
  }

  get(id: number): Observable<Mailbox> {
    return of(TestData.mailboxes.find(todo => todo.id === id));
  }

  getAll(): Observable<Mailbox[]> {
    return of(TestData.mailboxes);
  }

  getCompletedCountInCategory(category: MenuCategory): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: MenuCategory): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: MenuCategory): Observable<number> {
    return undefined;
  }

  search(category: MenuCategory, searchText: string, status: boolean): Observable<Mailbox[]> {
    return undefined;
  }

  update(T): Observable<Mailbox> {
    return undefined;
  }

}
