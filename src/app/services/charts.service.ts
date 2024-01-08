import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { 



  }


  get_for_whom(id:any){
    return this.http.get(
      `${environment.URL}/get_for_whom?id=${id}`
    );
  }
  add_for_whom(data:any,id:any){
    return this.http.post(
      `${environment.URL}/add_for_whom?id=${id}`,data
    );
  }
  get_for_what(id:any){
    return this.http.get(
      `${environment.URL}/get_for_what?id=${id}`
    );
  }
  add_for_what(data:any,id:any){
    return this.http.post(
      `${environment.URL}/add_for_what?id=${id}`,data
      );
    }
  get_charts(id:any){
    return this.http.get(
      `${environment.URL}/get_charts?id=${id}`
    );
  }
  add_charts(id:any,data:any){
    return this.http.post(
      `${environment.URL}/add_charts?id=${id}`,data
    );
  }
  save_for_whom(id:any,data:any){
    return this.http.post(
      `${environment.URL}/save_for_whom?id=${id}`,data
    );

  }
  save_for_what(id:any,data:any){
    return this.http.post(
      `${environment.URL}/save_for_what?id=${id}`,data
    );

  }
  remove_for_whom(userId:any,id:any){
    return this.http.delete(
      `${environment.URL}/remove_for_whom?id=${id}&user_id=${userId}`
    );

  }
  remove_for_what(userId:any,id:any,whome_id:any){
    return this.http.delete(
      `${environment.URL}/remove_for_what?id=${id}&user_id=${userId}&whome_id=${whome_id}`
    );

  }


}
