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
  refresh:any;
  ngOnInit() {
    this.getAllCard();
    this.dataService.currentMessage.subscribe(data => {
      console.log('data service run');
      
      if (data.type == 'update') {
        this.getAllCard();
      }
      else if(data.type == 'archive'){
        this.getAllCard();
      }
      else if(data.type == 'trash'){
        this.getAllCard();
      }
      else if(data.type=='setRemainder' || data.type == 'setRemainderToday' || data.type == 'setRemainderTommorow' 
              || data.type == 'setRemainderNextWeek' || data.type == 'removeRemainder'  ){
        this.getAllCard();
      }
      // else if(data.type == 'setRemainderToday'){
      //   this.getAllCard();
      // }
      // else if(data.type == 'setRemainderTommorow'){
      //   this.getAllCard();
      // }
      // else if(data.type == 'setRemainderNextWeek'){
      //   this.getAllCard();
      // }
      
    },
    
    )
  }
  update(event){
    console.log("event emitter printed...")
    this.getAllCard();
  }
  reloadevent(event){
    console.log("checking Label add/delete event....!")
    this.getAllCard();
  }


  getAllCard() {
    this.noteService.getNote().subscribe(data => {
      this.notes = data['data']['data'];
      this.get_notes = this.notes.reverse();
      this.displayNote=[]
      console.log('received refresh..',this.refresh)
     
      for (let i = 0; i < this.notes.length; i++) {
        if ((this.get_notes[i]['isDeleted'] == false) && (this.get_notes[i]['isArchived'] == false)) {
            this.displayNote.push(this.get_notes[i]);

        }
      }
      

      console.log("isdeleted notes",this.displayNote)
      //console.log("is notes",this.displayNote)

      console.log("reverse order", this.get_notes)
    }, err => {
      console.log(err);

    });
  }


}
