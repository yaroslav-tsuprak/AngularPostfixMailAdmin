import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuCategory} from '../../model/MenuCategory';
import {DateHandlerService} from '../../service/date-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories: MenuCategory[];

  @Output()
  selectCategory = new EventEmitter<MenuCategory>();

  selectedCategory: MenuCategory;

  constructor(private dateHandler: DateHandlerService) {
  }

  ngOnInit(): void {
  }
}
