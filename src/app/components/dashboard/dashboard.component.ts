import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProfilePicComponent } from '../../components/profile-pic/profile-pic.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;


  HeaderName = 'Fundoo'
  url;
  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
    this.url ='http://34.213.106.173/' + localStorage.getItem('image');
  }
  changeProfile(): void {
    const dialogRef = this.dialog.open(ProfilePicComponent, {
      width: '50%',
      data: ''
    });

  }



}
