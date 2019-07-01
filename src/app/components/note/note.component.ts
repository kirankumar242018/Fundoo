import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';
import { DataServiceService } from '../../service/DataService/data-service.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService, private dataService: DataServiceService) { }
  notes = [];
  get_notes = [];
  displayNote = [];
  ngOnInit() {
    this.getAllCard();
    this.dataService.currentMessage.subscribe(data => {
      if (data.type = 'update') {
        this.getAllCard();
      }
    },
    )
  }

  getAllCard() {
    this.noteService.getNote().subscribe(data => {
      this.notes = data['data']['data'];
      this.get_notes = this.notes.reverse();
      console.log(data)
      for (let i = 0; i < this.notes.length; i++) {
        if (this.get_notes[i]['isDeleted'] == false) {
          this.displayNote.push(this.notes[i]);

        }
      }
      for (let i = 0; i < this.notes.length; i++) {
        if (this.get_notes[i]['isArchived'] == false) {
          this.displayNote.push(this.notes[i]);

        }
      }

      console.log("isdeleted notes",this.displayNote)
      console.log("is notes",this.displayNote)

      console.log("reverse order", this.get_notes)
    }, err => {
      console.log(err);

    });
  }


}
