import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class UsersComponent implements OnInit {
  constructor(public router: Router) { }
  ngOnInit(): void {
    if (this.router.url === '/users') {
      this.router.navigate(['/users/list-of-users']);
    }
  }
}
