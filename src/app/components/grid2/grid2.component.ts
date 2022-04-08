import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss']
})
export class Grid2Component implements OnInit {

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
