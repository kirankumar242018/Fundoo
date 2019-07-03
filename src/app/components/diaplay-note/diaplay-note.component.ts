import { Component, OnInit, Input,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NoteService } from '../../service/NoteService/note.service';
import {DataServiceService} from '../../service/DataService/data-service.service'
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-diaplay-note',
  templateUrl: './diaplay-note.component.html',
  styleUrls: ['./diaplay-note.component.scss']
})
export class DiaplayNoteComponent implements OnInit {
  @Input() allCards;
  
  title:string
  description:string
  card:any
  constructor(public dialog: MatDialog,public noteService:NoteService,private dataService: DataServiceService,public snackBar:MatSnackBar ) { }

ngOnInit() {
  this.dataService.currentMessage.subscribe(message =>{
    console.log('data in display',message);
    
  })

}
modifyNote(note): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '50%',
      data: note
    });
  
}
get_notes=[]
pinedNotes=[]
isPined(note){
  var contents={
    noteIdList : [note['id']],
    isPined:true
}
// this.noteService.getNote().subscribe(data=>{
//   this.get_notes = data['data']['data'];
// })
this.noteService.ispined('notes/pinUnpinNotes',contents).subscribe(data=>{
  console.log('pinned notes....',data)
  // for (let i = 0; i < this.get_notes.length; i++) {
  //   if (this.get_notes[i]['isPined'] == true) {
  //     this.pinedNotes.push(this.allCards[i]);

  //   }
  // }
  console.log("pinned notes..",this.pinedNotes)
 

  this.snackBar.open("Note pinned Successfully..", "close", {
    duration: 3000,
  });
},
err => {
  console.log(err)
})
}


}
