import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/newgrid/localData';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss']
})
export class Grid3Component implements OnInit {

  
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
