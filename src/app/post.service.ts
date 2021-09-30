import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
url = "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  savePost(data: any){
    // console.warn(data);
    return this.http.post(this.url,data);
  }
  getCurrentPost(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
  deletePost(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }
  updatePost(id: any, data: any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
