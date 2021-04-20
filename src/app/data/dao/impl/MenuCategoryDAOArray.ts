import {CategoryDAO} from '../interface/CategoryDAO';
import {MenuCategory} from '../../../model/MenuCategory';
import {Observable, of} from 'rxjs';
import {TestData} from '../../TestData';


export class MenuCategoryDAOArray implements CategoryDAO {
  add(T): Observable<MenuCategory> {
    return undefined;
  }

  delete(id: number): Observable<MenuCategory> {
    return undefined;
  }

  get(id: number): Observable<MenuCategory> {
    return of(TestData.menuCategories.find(todo => todo.id === id));
  }

  getAll(): Observable<MenuCategory[]> {
    return of(TestData.menuCategories);
  }

  search(title: string): Observable<MenuCategory[]> {
    return undefined;
  }

  update(T): Observable<MenuCategory> {
    return undefined;
  }

}
