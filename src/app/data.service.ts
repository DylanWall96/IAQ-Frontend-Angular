import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from 'src/app/data';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}`);
  }

  public getKitchenData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}/data/chart/kitchen`);
  }

  public getBarData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}/data/chart/bar`);
  }

  public getOfficeData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}/data/chart/office`);
  }
}
