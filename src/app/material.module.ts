import { NgModule } from  '@angular/core';
 
import {MatButtonModule,MatToolbarModule, MatSnackBarModule} from  '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
imports: [MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,


],
exports: [MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,

],
 
})
 
export  class  MyMaterialModule { }