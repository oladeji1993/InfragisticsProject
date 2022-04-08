import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.scss']
})
export class NewGridComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'newGrid';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => formatDate(new Date(date), 'dd/mm/yyyy', 'en'));
    }
  }
}
