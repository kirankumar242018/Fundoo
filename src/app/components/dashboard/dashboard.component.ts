import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProfilePicComponent } from '../../components/profile-pic/profile-pic.component';
import { DataServiceService } from '../../service/DataService/data-service.service';
import { UserService } from 'src/app/service/UserService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;


  HeaderName = 'Fundoo'
  email='';
  firstname='';
  lastname='';
  username='';
  imageurl;
  localstorage_image;

  private _mobileQueryListener: () => void;

  constructor(private dataService: DataServiceService,public router:Router ,private snackBar: MatSnackBar,private userService:UserService, public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
   //this.localstorage_image = localStorage.getItem('image')
   this.changeProfilePic()
   this.email = localStorage.getItem('email');
   this.firstname = localStorage.getItem('firstName');
   this.lastname = localStorage.getItem('lastName');
   this.username = this.firstname + this.lastname;

   this.dataService.currentMessage.subscribe(data=>{
    // console.log("checking data",data) 
    if(data.type == 'profile'){
       this.changeProfilePic()
     }
   })
  }
  changeProfile(): void {
    const dialogRef = this.dialog.open(ProfilePicComponent, {
      width: '50%',
      data: ''
    });

  }
  changeProfilePic(){
    this.localstorage_image=localStorage.getItem('image');
    this.imageurl ='http://34.213.106.173/' + this.localstorage_image ;
  }
  logout(){
    this.userService.logout('user/logout',{}).subscribe(data=>{
      console.log(data)
      localStorage.removeItem('token');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('imageUrl');
      localStorage.removeItem('email');
      //localStorage.clear();
      this.snackBar.open("Logged out Successfully..","close", {
        duration: 3000,
      });
      this.router.navigate(['login'])
    })
  }

}

