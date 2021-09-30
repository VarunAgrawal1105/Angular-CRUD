import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private post: PostService, private rout: Router) { }

  addPost = new FormGroup({
    title: new FormControl(''),
    categories: new FormControl(''),
    content: new FormControl(''),
    likes: new FormControl(0)
  })

  collectPost(){
    //console.warn(this.addPost.value);
    this.post.savePost(this.addPost.value).subscribe((result)=>{
      console.warn(result);
      this.rout.navigate(['/']);
    });
    this.addPost.reset({});
  }
  ngOnInit(): void {

  }

}
