import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.scss']
})
export class CreateLabelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateLabelComponent>) { }

  ngOnInit() {
  }
  done(){
    this.dialogRef.close();
  }
}
