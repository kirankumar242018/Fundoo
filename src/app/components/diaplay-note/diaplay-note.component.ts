import { Component, OnInit, Input,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NoteService } from '../../service/NoteService/note.service';
import {DataServiceService} from '../../service/DataService/data-service.service'
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
  constructor(public dialog: MatDialog,public noteService:NoteService,private dataService: DataServiceService ) { }

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

}
