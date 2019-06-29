import { Component, OnInit, Input } from '@angular/core';
import { notEqual } from 'assert';
import { DataServiceService } from '../../service/DataService/data-service.service'
import { NoteService } from '../../service/NoteService/note.service';
import { MatSnackBar, MatCard } from '@angular/material';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  isdeleted=true;
  constructor(public dataService: DataServiceService,public noteService:NoteService,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  @Input() childMessage
  deleteNote(){
    var contents={
      noteId : this.childMessage.id,
      // noteId :card.id,
      isdeleted:this.isdeleted
    }
    this.noteService.deleteNote('notes/trashNotes',contents).subscribe(data=>{
      console.log(data);
      this.dataService.changeMessage({
        data:{},
        type:'delete'
      })
      this.snackBar.open("Note moved to trash Successfully..","close", {
        duration: 3000,
      });
    },
    err=>{
      console.log(err)
    })
  }

}
