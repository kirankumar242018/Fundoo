import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/service/DataService/data-service.service'
import { NoteService } from 'src/app/service/NoteService/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  constructor(public dataService: DataServiceService, public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object,public noteService:NoteService,private snackBar:MatSnackBar) { }
  
  title: string;
  description:string;
  card:any;
  ngOnInit() {
    console.log('data ', this.data);
    
      this.title=this.data['title'];
      this.description=this.data['description'];
      this.card=this.data['id'];
    
    
  }
  close(): void {
    // var contents={
    //   "title":this.data['title'],
    //   "description":this.data['description'],
    //   "noteId":this.data['id']
    // }
    this.noteService.updateNote('notes/updateNotes',contents).subscribe(data=>{
      console.log(data);
      this.snackBar.open("Note Updated Successfully..","close", {
        duration: 3000,
      });
    },
    err =>{
      console.log(err)
    })
    this.dialogRef.close();
  }
  

}
