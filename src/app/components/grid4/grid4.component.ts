import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/newgrid/localData';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss']
})
export class Grid4Component implements OnInit {

  public EmployeeData: Employee[] = [];

  constructor(
    private localData: LocalDataService
  ) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.EmployeeData = this.localData.getAllEmployee()
  }


}
