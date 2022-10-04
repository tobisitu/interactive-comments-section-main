import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NewReplyComponent } from '../new-reply/new-reply.component';
import * as $ from 'jquery'

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() userName!: string;
  @Input() user!: string;
  @Input() createdAt!: string;
  @Input() content!: string;
  @Input() score!: number;
  @Input() commentID!: any;


  public repliesComponentRef!: ComponentRef<NewReplyComponent>;

  @ViewChild ('replies', {read: ViewContainerRef, static: true}) 
  replies !: ViewContainerRef;
  
  data = require('../../assets/data.json')
  comments = this.data.comments;
  currentUserData = this.data.currentUser

  constructor() { }

  ngOnInit(): void {
  }

  public replyComment() {
    this.repliesComponentRef = this.replies.createComponent(NewReplyComponent);
    console.log(this.repliesComponentRef)
    this.repliesComponentRef.instance.user = this.currentUserData.image.png;
    this.repliesComponentRef.instance.userName = this.currentUserData.userName;
  }

  public incrementScore() {
    this.score++
  }

  public decrementScore() {
    this.score--
  }
}
