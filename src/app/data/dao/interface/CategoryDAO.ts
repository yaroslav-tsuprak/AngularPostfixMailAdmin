import {CommonDAO} from './CommonDAO';
import {MenuCategory} from '../../../model/MenuCategory';
import {Observable} from 'rxjs';


export interface CategoryDAO extends CommonDAO<MenuCategory> {

  search(title: string): Observable<MenuCategory[]>;


}
