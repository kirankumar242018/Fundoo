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
  color=[['#FFFFFF','#FF0000','#0000FF','#FFFF00'],['#00FFFF','#FF00FF','#DC143C','#00BFFF'],['EE82EE','#F5DEB3','#F5F5F5','#8B4513']];

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
      this.snackBar.open("Note archived successfully...","close",{duration:3000,});
    },
    err=>{
      console.log(err)
    })

  }
  changeColor(color){
    var contents = {
      noteIdList:[this.childMessage['id']],
      color:color
    }
    this.noteService.noteColorChange('notes/changesColorNotes',contents).subscribe(data=>{
      console.log(data);
      this.snackBar.open('Note color changed suceesfully...',"close",{duration:2000,});
    },
    err=>{
      console.log(err)
    })

  }
  

}
