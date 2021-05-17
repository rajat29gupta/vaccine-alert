import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CowinService {

  constructor(private http: HttpClient) { }
  public checkVaccine(userChoice:any): Observable<any> {
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${userChoice.districtId}&date=${userChoice.date}`).pipe(map(res => res));
  }
}
