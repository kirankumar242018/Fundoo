import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';
import { DataServiceService } from '../../service/DataService/data-service.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService,private dataService:DataServiceService) { }
  notes = [];
  ngOnInit() {
    this.getAllCard();
    this.dataService.currentMessage.subscribe(data=>{
      if(data.type='update'){
        this.getAllCard();
      }
    })
  }

  getAllCard() {
    this.noteService.getNote().subscribe(data => {
      this.notes = data['data']['data'];
      console.log(data)
    }, err => {
      console.log(err);

    });
  }


}
