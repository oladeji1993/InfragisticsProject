import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
