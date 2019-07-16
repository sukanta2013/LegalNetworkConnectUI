import { Component, OnInit } from '@angular/core';
import { SmartTableService } from '../../../../@core/data/smart-table.service';
import { LncService } from '../../../../services/lnc-service';
import { LocalDataSource } from 'ng2-smart-table';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      FirstName: {
        title: 'First Name',
        type: 'string',
      },
      LastName: {
        title: 'Last Name',
        type: 'string',
      },
      UserName:{
        title: 'UserName',
        type: 'string'
      },
      Email: {
        title: 'E-mail',
        type: 'string',
      },
      Phone: {
        title: 'Phone Number',
        type: 'string',
      },
      Extension:{
        title: 'Extension',
        type: 'string'
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(
    private _tableService : SmartTableService,
    private _lncService: LncService
  ) {
      const data = this._lncService.Get(environment.lncServiceIp+'User/GetAllUser').subscribe(response=>{
        this.source.load(response)
      })
   }
  ngOnInit() {
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
