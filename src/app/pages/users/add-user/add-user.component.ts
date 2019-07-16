import { Component, OnInit } from '@angular/core';
import { LncService } from '../../../services/lnc-service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
  })
  export class AddUserComponent implements OnInit {
    constructor(
        private _lncService: LncService
      ) {
      }
      ngOnInit() {
    }
  }