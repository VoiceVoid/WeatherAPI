import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  city:string;
  code: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  save(){
    const location = {
      city: this.city,
      code: this.code
    };
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home']);
  }

}
