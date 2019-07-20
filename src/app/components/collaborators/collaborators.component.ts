import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from '../../service/NoteService/note.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataServiceService } from '../../service/DataService/data-service.service';

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
  required=[]
  collaborators=[]

   constructor(public dialogRef: MatDialogRef<CollaboratorsComponent>,private noteService:NoteService,
    public snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any,private dataService:DataServiceService) {
    console.log("paseed  data..!",data)
      this.required=data.childMessage.id;
    console.log("required data...",this.required) 
    }
  
  ngOnInit() {
    this.email = localStorage.getItem('email');
   this.firstname = localStorage.getItem('firstName');
   this.lastname = localStorage.getItem('lastName');
   this.username = this.firstname + this.lastname;
   this.localstorage_image=localStorage.getItem('image');
   this.imageurl ='http://34.213.106.173/' + this.localstorage_image ;
  console.log("child Card value..!",this.data)
  }
  user_list=[]
  add_col=[]
  noteid;

  // select=String;
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
  addCollaborator(user){
    console.log("collaborators user data...!",user)
    this.add_col.push(user)
    console.log("storing into a array...!",this.add_col)

    var contents={
      id:this.required,
      data:{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        userId:user.userId
      }
    }
    this.noteService.addCollaborator('notes/'+contents.id+'/AddcollaboratorsNotes',contents.data).subscribe(data=>{
      console.log("adding collaborators...!",data)
      this.dataService.changeMessage({
        data:{},
        type:'addcollaborator'
      })
      this.snackBar.open("note collaborated successfully..!","close",{duration:3000,})


    })

  }
  display(value){
    return value ? value.email : undefined;
  }
  cancel(){
    this.dialogRef.close();

  }

}
