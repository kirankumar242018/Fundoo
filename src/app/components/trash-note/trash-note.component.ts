import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  notes=[]
  get_notes=[]
  trashNotes=[]
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
        if (this.get_notes[i]['isDeleted'] == true) {
          this.trashNotes.push(this.notes[i]);

        }
      }
     

      console.log("isdeleted notes",this.trashNotes)

      console.log("reverse order", this.get_notes)
    }, err => {
      console.log(err);

    });
  }

}
