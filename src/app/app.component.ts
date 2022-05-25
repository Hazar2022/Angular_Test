import { Component, OnInit } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service'; 
import { IUsers } from './users';
import { Observable } from 'rxjs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Maids';

  searchId: any;

   public   users: IUsers[] =[];


  constructor (private _userService: UsersService) {}

  ngOnInit() {
    this._userService.getData()
      .subscribe((data : IUsers[]) => {this.users = data;});
      
  }
  
  
}
