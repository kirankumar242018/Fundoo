import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/NoteService/note.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


import { Router } from '@angular/router';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  constructor(private noteService:NoteService, public router:Router,private snackBar:MatSnackBar) { }
title=new FormControl('',[Validators.required])
description=new FormControl('',[Validators.required])

  ngOnInit() {
  }
  addNote(){
    var form_contents = {
      "title":this.title.value,
      "description":this.description.value
    }
    console.log(form_contents)
    if(this.title.value =='' || this.description.value == '' )
    {
      this.snackBar.open("title and description is required...","close", {
        duration: 3000,
      });
    }
    else{
      this.noteService.addNote('notes/addNotes',form_contents).subscribe(data =>{
        console.log(data,"note data")
        this.snackBar.open("Note Created Successfully..","close", {
          duration: 3000,
        });
        // this.router.navigate(['dashboard'])
      },
      err =>{
        console.log(err)
      } )
    }
  }

}
