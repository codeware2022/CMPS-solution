import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IDistributor } from '../../../interfaces/idistributor';

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.scss']
})
export class ViewDistributorComponent implements OnInit {

  distributorList:IDistributor [] = [];
  constructor(private localStorageService:LocalStorageService){
  }
  
  ngOnInit(): void {
    this. getAllDistributors();
  }

  getAllDistributors(){       
    this.distributorList =  this.localStorageService.getObject("Distributor")
  }

}
