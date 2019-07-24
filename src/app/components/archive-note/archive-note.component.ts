import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  notes=[]
  get_notes=[]
  archiveNotes=[]
  pinnedNotes=[]
  unPinnedNotes=[]
  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.getAllCard()
  }

  getAllCard() {
    this.noteService.getNote().subscribe(data => {
      this.notes = data['data']['data'];
      this.get_notes = this.notes.reverse();
      console.log("archive data...!",data)
      for (let i = 0; i < this.notes.length; i++) {
        if (this.get_notes[i]['isArchived'] == true) {
          this.archiveNotes.push(this.notes[i]);

        }
        if(this.get_notes[i]['isDeleted']==false || this.get_notes[i]['isArchive']==false){
          if (this.get_notes[i]['isPined'] == true) {
            this.pinnedNotes.push(this.get_notes[i]);
            console.log("pinned notes are...!",this.pinnedNotes)
          }
          else{
            this.unPinnedNotes.push(this.get_notes[i])
            console.log("unpinned notes are...!",this.unPinnedNotes)
          }
        }
      }
     

      console.log("isarchived notes",this.archiveNotes)

      console.log("reverse order", this.get_notes)
    }, err => {
      console.log(err);

    });
  }
}
