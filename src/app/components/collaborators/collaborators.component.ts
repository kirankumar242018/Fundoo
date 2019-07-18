import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  email='';
  firstname='';
  lastname='';
  username='';
  imageurl;
  localstorage_image;
  values;
   constructor(private noteService:NoteService) { }
  
  ngOnInit() {
    this.email = localStorage.getItem('email');
   this.firstname = localStorage.getItem('firstName');
   this.lastname = localStorage.getItem('lastName');
   this.username = this.firstname + this.lastname;
   this.localstorage_image=localStorage.getItem('image');
   this.imageurl ='http://34.213.106.173/' + this.localstorage_image ;

  }
  user_list=[]
  searchUserList(event){
    console.log("user list .....!",event)
    this.values=event.target.value
    var contents={
      searchWord:this.values
  }
  this.noteService.searchUserList('user/searchUserList',contents).subscribe(data=>{
    console.log('user searchList..!',data)
    this.user_list = data['data'].details
    console.log('user Array...!',this.user_list)

  })

  }
}
