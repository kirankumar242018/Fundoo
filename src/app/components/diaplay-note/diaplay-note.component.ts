import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diaplay-note',
  templateUrl: './diaplay-note.component.html',
  styleUrls: ['./diaplay-note.component.scss']
})
export class DiaplayNoteComponent implements OnInit {
  @Input() allCards;
    constructor() { }

ngOnInit() {
}

}
