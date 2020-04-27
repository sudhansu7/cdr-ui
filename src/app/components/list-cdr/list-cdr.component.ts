import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DeliveryRecord } from '../../shared/DeliveryRecord';
@Component({
  selector: 'app-list-cdr',
  templateUrl: './list-cdr.component.html',
  styleUrls: ['./list-cdr.component.css']
})
export class ListCdrComponent implements OnInit {
  cdrData: any = [];
  dataSource: MatTableDataSource<DeliveryRecord>;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'service_name', 'tag','bug_id','submitter_id','image_type' ,'created_at', 'action'];
  
  constructor(private cdrApi: ApiService) {
    this.cdrApi.GetCdr().subscribe(data => {
      this.cdrData = data;
      this.dataSource = new MatTableDataSource<DeliveryRecord>(this.cdrData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() {
  }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.cdrApi.DeleteCdr(e._id).subscribe()
    }
  }
}
