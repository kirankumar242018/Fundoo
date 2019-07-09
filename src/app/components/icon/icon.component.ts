import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../service/DataService/data-service.service'
import { NoteService } from '../../service/NoteService/note.service';
import { MatSnackBar, MatCard } from '@angular/material';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  // isdeleted = true;
  constructor(public dataService: DataServiceService, public noteService: NoteService, private snackBar: MatSnackBar) { }
  color=[['#FFFFFF','#f28b82','#fbbc04','#fff475'],['#ccff90','#a7ffeb','#cbf0f8','#aecbfa'],['#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']];

  ngOnInit() {

  }

  @Input() childMessage


  trashNote() {
    var contents = {
      noteIdList: [this.childMessage['id']],
      isDeleted: true
    }
    this.noteService.deleteNote('notes/trashNotes', contents).subscribe(data => {
      console.log(data);
      this.dataService.changeMessage({
        data:{},
        type:'trash'
      })
      
      this.snackBar.open("Note moved to trash Successfully..", "close", {
        duration: 3000,
      });
    },
      err => {
        console.log(err)
      })
  }
  archiveNote(){
    var contents = {
      noteIdList:[this.childMessage['id']],
      isArchived:true
    }
    this.noteService.archiveNote('notes/archiveNotes',contents).subscribe(data=>{
      console.log(data);
      this.dataService.changeMessage({
        data:{},
        type:'archive'
      })

      this.snackBar.open("Note archived successfully...","close",{duration:3000,});
    },
    err=>{
      console.log(err)
    })

  }
  changeColor(color,childMessage){
    console.log("note details",color)
    this.childMessage.color = color
    console.log("note color",color)
    
    var contents = {
      noteIdList:[this.childMessage['id']],
      color:color
    }
    this.noteService.noteColorChange('notes/changesColorNotes',contents).subscribe(data=>{
      console.log(data);
      // this.snackBar.open('Note color changed suceesfully...',"close",{duration:2000,});
    },
    err=>{
      console.log(err)
    })

  }
  

}
