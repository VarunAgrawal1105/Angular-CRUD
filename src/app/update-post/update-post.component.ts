import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  postData:any={}
  constructor(private router: ActivatedRoute, private post: PostService, private rout:Router) { }

  editPost = new FormGroup({
    title: new FormControl(''),
    categories: new FormControl(''),
    content: new FormControl(''),
    likes: new FormControl(0)
  })

  ngOnInit(): void {
    this.post.getCurrentPost(this.router.snapshot.params.id).subscribe((result)=>{
      // console.warn(result);
      this.postData = result;
      this.editPost = new FormGroup({
        title: new FormControl(this.postData.title),
        categories: new FormControl(this.postData.categories),
        content: new FormControl(this.postData.content),
        likes: new FormControl(this.postData.likes)
      })
    })
  }

  collectPost(){
    this.post.updatePost(this.router.snapshot.params.id,this.editPost.value).subscribe((result)=>{
      this.rout.navigate(['/']);
    })
  }

}
