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
  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.getAllCard()
  }

  getAllCard() {
    this.noteService.getNote().subscribe(data => {
      this.notes = data['data']['data'];
      this.get_notes = this.notes.reverse();
      console.log(data)
      for (let i = 0; i < this.notes.length; i++) {
        if (this.get_notes[i]['isArchived'] == true) {
          this.archiveNotes.push(this.notes[i]);

        }
      }
     

      console.log("isarchived notes",this.archiveNotes)

      console.log("reverse order", this.get_notes)
    }, err => {
      console.log(err);

    });
  }
}
