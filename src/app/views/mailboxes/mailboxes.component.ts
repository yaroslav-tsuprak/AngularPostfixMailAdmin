import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Mailbox} from '../../model/Mailbox';
import {DateHandlerService} from '../../service/date-handler.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tasks',
  templateUrl: './mailboxes.component.html',
  styleUrls: ['./mailboxes.component.css']
})
export class MailboxesComponent implements OnInit {

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'category'];
  dataSource: MatTableDataSource<Mailbox>;
  tasks: Mailbox[];

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private dateHandler: DateHandlerService) { }

  ngOnInit(): void {
  }
}
