import {Component, OnInit} from '@angular/core';
import {Mailbox} from './model/Mailbox';
import {DateHandlerService} from './service/date-handler.service';
import {MenuCategory} from './model/MenuCategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Angular Postfix Mail Admin Center';
  mailboxes: Mailbox[];
  menuCategories: MenuCategory[];

  constructor(private dateHandler: DateHandlerService) {
  }

  ngOnInit(): void {
    this.dateHandler.getAllTasks().subscribe(mailboxes => this.mailboxes = mailboxes);
    this.dateHandler.getAllCategories().subscribe(menuCategories => this.menuCategories = menuCategories);
  }
}
