import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const postData = require('../../post.json');
const similarPostData = require('../../similarPosts.json');

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  postJoson: any;
  similarPosts: any;
  food: boolean;
  travel: boolean;
  travelPost: any;
  myPost= [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.postJoson = postData;
    console.log(this.postJoson);
    
    for(let i=0;i<this.postJoson.length;i++){
    if(this.postJoson[i].user == "Abdul"){
      this.myPost.push(this.postJoson[i]);
    }
  }
    this.similarPosts = similarPostData;
  }

  addFood() {
    this.food = true;
    this.similarPosts = this.similarPosts.concat(this.postJoson);
  }

  addTravel() {
    this.travel = true;
    this.similarPosts = this.similarPosts.concat(this.travelPost);
  }

}
