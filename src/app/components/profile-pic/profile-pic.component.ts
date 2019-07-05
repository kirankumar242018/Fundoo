import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NoteService} from '../../service/NoteService/note.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProfilePicComponent>,public noteService:NoteService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  selectedfile : any='';
  getprofilephoto(event){
    console.log("data in event",event)
    this.selectedfile = event;
  }
  setprofilephoto(){

    //this.noteService.profilePic('notes/changesColorNotes',)
  }

  close(){
    this.dialogRef.close();

  }
  cancel(){
    this.dialogRef.close();

  }
}
