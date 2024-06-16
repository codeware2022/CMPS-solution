import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IDistributor } from '../../../interfaces/idistributor';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.scss']
})
export class AddDistributorComponent implements OnInit {

  distributorForm: FormGroup;
  distributor : IDistributor[]=[];
  message:string;
  messageStatus : boolean = false;
  constructor(private formBuilder:FormBuilder, private localStorageService:LocalStorageService){
    this.initializeForm();
  }
  ngOnInit(): void {
    console.log(this.messageStatus);
    
  }

  initializeForm(){
    this.distributorForm = this.formBuilder.group({
      distributorName: [null, Validators.required],
      address: [null],
      contactNo:[null,Validators.required],
      email:[null,Validators.required],
      remarks:[null]
    });
  };

  onDistributorNameEntered($event: any){
    if ($event && !($event instanceof Event)){
      const distributorName : String = $event;
      this.distributorForm.patchValue({
        distributorName : distributorName
      });
    };
  };

  onAddressEntered($event : any){
    if($event && !($event instanceof Event)){
      const address: string = $event;
      this.distributorForm.patchValue({
        address:address
      });
    };
  };

  OnContactNoEntered($event: any){
    if($event && !($event instanceof Event)){
        const contactNo:string  = $event;
        this.distributorForm.patchValue({
          contactNo : contactNo
        });
      };
  };

  onEmailEntered($event: any){
    if($event && !($event instanceof Event)){
      const email:string = $event;
      this.distributorForm.patchValue({
        email : email
      });
    };
  };

  onRemarksEntered($event: any){
    if($event && !($event instanceof Event)){
      const remarks:string = $event;
      this.distributorForm.patchValue({
        remarks:remarks
      });
    };
  };

  onReset(){
    this.distributorForm.reset();
  }

  addDistributor(){
    this.distributor.push(this.distributorForm.value);
    this.localStorageService.setObject('Distributor',this.distributor).subscribe(
      (status:boolean)=>{
        if(status){
          debugger;        
          this.onReset();
          this.messageStatus = status;
          this.message = "Data Successfully Saved!";
        }
        else{
          this.messageStatus = status;
          this.message = "Failed to save data!";
        }
    });

  }
}
