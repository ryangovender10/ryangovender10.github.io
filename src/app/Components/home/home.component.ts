import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries:Country;
  country:Country;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
   this.getCountries();
   this.getDate();
  }

  Date : Date;

  getCountries()
  {
    return this.homeService.getCountryData().subscribe(
      (data:any)=>{
        this.country = data;
      }
    );
  }

  getDate ()
  {
    var date = new Date();
    this.Date = date;
  }

  

}
