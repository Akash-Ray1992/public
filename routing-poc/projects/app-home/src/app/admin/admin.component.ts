import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

    isActiveUsers: boolean = true;
    isArchivedUsers: boolean = true;
    isFullScreen: boolean = true;
    isSplitScreen: boolean = false;
    userDataObject: any;
    userDataList: any = [];

    constructor(private router: Router, private userService: AdminService) {
        let splitArray = router.url.split('/');
        if (splitArray[2] === 'active') {
            this.isActiveUsers = true;
            this.isArchivedUsers = false;
        } else {
            this.isArchivedUsers = true;
            this.isActiveUsers = false;
        }
    }

    ngOnInit(): void {
        if(this.isActiveUsers) {
            this.populateActiveUsers();
        } else {
            this.populateArchivedUsers();
        }
    }

    populateActiveUsers() {
        this.userService.getActiveUsers().subscribe((response) => {
            this.userDataObject = response;
            this.userDataList = this.userDataObject.data;
        });
    }

    populateArchivedUsers() {
        this.userService.getArchivedUsers().subscribe((response) => {
            this.userDataObject = response;
            this.userDataList = this.userDataObject.data;
        });
    }

    viewMode(value) {
        if(value === 'fullScreen') {
            this.isFullScreen = true;
            this.isSplitScreen = false;            
        } else {
            this.isFullScreen = false;
            this.isSplitScreen = true; 
        }
    }   
}
