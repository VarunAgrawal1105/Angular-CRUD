import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  constructor(private post: PostService) { }

  collection:any = {};

  ngOnInit(): void {
    this.post.getList().subscribe((result)=>{
      console.warn(result);
      this.collection = result;
    });

  }
  // detailPost() {
  //   this.router.navigateByUrl(['/detail']);
  // };

}
