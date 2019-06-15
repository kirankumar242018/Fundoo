import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../service/HttpService/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../service/UserService/user.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any ;
  response : any;
  message = ''
  message_1 = '' 

  userName = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(6)]);


  constructor(private httpService:UserService,public router:Router ,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  // login(){
  //   try{
  //     this.model = {
  //       userName : this.userName.value,
  //       password : this.password.value

  //     }
  //     if(this.userName.value == '' || this.password.value == '')
  //     {
  //       this.message = ""
  //       this.snackBar.open("Fields must be filled empty not accepted...", "close" ,{ duration: 3000});
  //       return
  //     }
  //     else{
  //       this.httpService.postRequest('/user/login',this.model).subscribe(data =>{
  //         this.response = data ;
  //         this.message_1 = this.response.message
  //         console.log(data)
  //         // this.router.navigate(['dashBoard'])

  //       },
  //       err =>{
  //         alert('Invalid User..!')
  //       })
  //     }
  //   }
  //   catch(err)
  //   {
  //     this.message="User Not Found.."

  //   }

  // }

  userNameErrorMessage(){
    return this.userName.hasError('required') ? 'Enter the userName':
    '';
  }
  paswordErrorMessage(){
    return this.password.hasError('required') ? 'Enter the password':
    this.password.hasError('minLength(6)') ? 'Enter the password length atleast 6 charcters..':
    this.password.hasError('maxLength(15)') ? 'Enter the password length not greaterthan 15 charcters..':
    "";
  }

  getLogin(){
    var field_contents = {
      "email":this.userName.value,
      "password":this.password.value
    }

    console.log(field_contents);
    this.httpService.loginService('user/login',field_contents).subscribe(data =>{
      localStorage.setItem('token',data['id']);
      console.log(field_contents)
      
      this.snackBar.open("Logged Successfully..","close", {
        duration: 3000,
      });
      this.router.navigate(['dashboard'])
    },
    err =>{
      console.log(err)
    } )
    
  }


  forgot_password()
  {
    console.log('jumping to forgot password component..')
    this.router.navigate(['forgot-password'])
  }
  register()
  {
    console.log('jumping to register component..')
    this.router.navigate(['register'])
  }


}
