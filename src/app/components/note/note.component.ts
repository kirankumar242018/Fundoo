import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  notes = [];
  ngOnInit() {
    this.noteService.getNote().subscribe(data => {
        this.notes = data['data']['data'];
        console.log(data)
      }, err => {
        console.log(err);

      });
  }



}
