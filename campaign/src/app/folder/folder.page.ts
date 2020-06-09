import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var require:any;
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
  postLength;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.postJoson = postData;
    this.similarPosts = similarPostData;
    this.postLength = this.similarPosts.length;
    console.log(this.postJoson);
    for(let i=0;i<this.postJoson.length;i++){
      if(this.postJoson[i].likes > 999 || this.postJoson.comments > 999) {
        this.postJoson[i].likes = Math.round(this.postJoson[i].likes / 1000) + 'k';
        this.postJoson[i].comments = Math.round(this.postJoson[i].comments / 1000) + 'k';
      }
    if(this.postJoson[i].user == "Abdul"){
      this.myPost.push(this.postJoson[i]);
    }
  }
  }

  addTag(tagname) {
    if(tagname == "food"){
      this.food = true;
    } else if (tagname == "travel") {
      this.travel = true;
    }
    for(let i=0;i<this.postJoson.length;i++){
      const result = this.postJoson[i].hashTags.filter(tag => tag == tagname);      
      if(result == tagname){

         this.similarPosts.unshift(this.postJoson[i]);
         this.postLength = this.similarPosts.length;
       }
    }
  }

  deleteTag(tagname) {
    if(tagname == "food"){
      this.food = false;
    } else if (tagname == "travel") {
      this.travel = false;
    }
    for(let i=0;i<this.similarPosts.length;i++){
      const result = this.similarPosts[i].hashTags.filter(tag => tag == tagname);
      if(result == tagname){
        const index = this.similarPosts.indexOf(this.similarPosts[i]);
         this.similarPosts.splice(index,1);
         this.postLength = this.similarPosts.length;       
       }
    }
  }

}
