import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlayerService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(this.apiUrl + '/players');
  }

  getPlayer(id : number) {
    console.log(this.apiUrl + '/players/' + id + '/advanced');
    return this.http.get(this.apiUrl + '/players/' + id + '/advanced');
  }
}

