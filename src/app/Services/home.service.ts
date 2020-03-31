import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Models/Country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  getCountryData():Observable<Country>{
    return this._http.get<Country>('https://coronavirus-19-api.herokuapp.com/countries/south%20africa');
  }
}
