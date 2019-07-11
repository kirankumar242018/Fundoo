import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {LabelService} from '../../service/LabelService/label.service';
@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.scss']
})
export class CreateLabelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateLabelComponent>,private labelService:LabelService) { }
  allLabels=[];
  ngOnInit() {
  }
  done(){
    this.dialogRef.close();
  }
  getNoteLabels(){
    this.labelService.getLabel().subscribe(data=>{
      console.log("labels data...",data)
      this.allLabels = data['data']['details'];
      console.log("got labels..",this.allLabels)

    },
    err=>{
      console.log(err)
    });
  }
}
