import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {LabelService} from '../../service/LabelService/label.service';
import { DataServiceService } from '../../service/DataService/data-service.service';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.scss']
})
export class CreateLabelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateLabelComponent>,@Inject(MAT_DIALOG_DATA) public data: object,
  private labelService:LabelService,private dataService:DataServiceService,public snackBar:MatSnackBar) { }
  allLabels=[];
  getLabels=[];
  labelsData=[];
  labelname=new FormControl('',[Validators.required])
  userId = localStorage.getItem('userId')
  editname = new FormControl('',[Validators.required])
  labelId:any;
  

  ngOnInit() {
    this.getNoteLabels();
    // console.log("mat-dialogue data..",this.data['label'])
    // this.labelId = this.data['id'];
    // console.log('label id..!',this.labelId)
    // this.labelsData = this.data['data'];
    
  }
  
  getNoteLabels(){
    this.labelService.getLabel().subscribe(data=>{
      console.log("labels data...",data)
      this.allLabels = data['data']['details'];
      //this.getLabels = this.addLabels.reverse();
      console.log("got labels..",this.allLabels)

    },
    err=>{
      console.log(err)
    });
  }
  addLabels(){
    var contents={
      label : this.labelname.value,
      isDeleted : false,
      userId: this.userId
    }
    this.labelService.addLabel('noteLabels',contents).subscribe(data=>{
      console.log("label added..!",data)
      this.snackBar.open("Note Created Successfully..","close", {
        duration: 3000,
      });
    })
    this.dialogRef.close();

  }
  editLabels(labelid,labelname){
    var contents={
      label :labelname,
      isDeleted:false,
      id:labelid,
      userId:this.userId
    }
    this.labelService.editLabel('noteLabels/'+labelid+'/updateNoteLabel',contents).subscribe(data=>{
      console.log("edit label..!",data)
      this.snackBar.open('label edited successfully....!',"close",{
        duration:3000,
      })
    },
    err=>{
      console.log(err)
    })
  }
}
