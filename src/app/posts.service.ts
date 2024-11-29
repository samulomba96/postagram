import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostDTO } from './models/post';

@Injectable({
  providedIn: 'root'
})



export class PostsService {
  //qui nel costrittore del servizio importiamo l'http client dell'app.config
  //si può importare anche così
  //http = inject(HttpClient)

  constructor(private http: HttpClient) { 

  }

  //angular sta nel localhost 4200 mentre l altro server sta nella 3000, quindi in questo esempio per funzionare bisogna tenere accesi entrambi i server con VS code
  getPosts(){
    return this.http.get<Post[]>("http://localhost:3000/api/posts"); //il server che usiamo
  }

  addPost(post: PostDTO){
    return this.http.post<Post>("http://localhost:3000/api/posts", post);
  }

  deletePost(id: string){
    return this.http.delete<Post>("http://localhost:3000/api/posts/" + id);
  }
}
