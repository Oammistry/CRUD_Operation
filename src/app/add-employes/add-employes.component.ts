import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employes',
  templateUrl: './add-employes.component.html',
  styleUrls: ['./add-employes.component.css']
})
export class AddEmployesComponent implements OnInit {
  empform: FormGroup;

  Education: string[]=[
    'Matrix',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  

  constructor (
    private _fb: FormBuilder,
    private _employeservise:EmployeeService,
    private _dialogRef: MatDialogRef<AddEmployesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _CoreService: CoreService
    ){
    this.empform = this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
      
    });
  }
  ngOnInit(): void {
    this.empform.patchValue(this.data);
  }

  OnFormsubmit(){
    if (this.empform.valid) {
      if (this.data) {
        this._employeservise
          .updateEmployee(this.data.id, this.empform.value )
          .subscribe({
            next: (val: any) => {
              this._CoreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        } else {
          this._employeservise.addEmployee(this.empform.value).subscribe({
            next: (val: any) => {
              this._CoreService.openSnackBar('Employee added successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
    }
  }
}
}

