import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {

    



   }
   getProjects() {
    return this.http.get(
      `${environment.URL}/get_users?token=xyz`
    );
  }
}
