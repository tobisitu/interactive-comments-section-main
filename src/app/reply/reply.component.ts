import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NewReplyComponent } from '../new-reply/new-reply.component';
import * as $ from 'jquery'

@Component({
  selector: 'reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() userName!: string;
  @Input() currentUser!: string;
  @Input() user!: string;
  @Input() createdAt!: string;
  @Input() content!: string;
  @Input() score!: number;
  @Input() replyingTo!: any;
  @Input() replyID!: any;

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

  public editReply(id:any) {
    console.log(id)
    var replyDiv = document.querySelectorAll(`#comment${id}`);
    replyDiv[0].setAttribute("contenteditable", 'true');
    $(`#edit${id}`).prop("disabled", true);
    $(`#delete${id}`).prop("disabled", true);
    $(`#update${id}`).show();
    console.log(this.replyID, $(`#reply${this.replyID}`), this)
  }


  public updateReply(id:any) {
    var replyDiv = document.querySelectorAll(`#comment${id}`);
    replyDiv[0].setAttribute("contenteditable", 'false');
    $(`#edit${id}`).prop("disabled", false);
    $(`#delete${id}`).prop("disabled", false);
    $(`#update${id}`).removeAttr("style").hide();
    console.log(this.replyID, $(`#reply${this.replyID}`), this)
  }

  public deleteComment() {
    console.log(this.replyID, $(`#reply${this.replyID}`), this)
    $(`#reply${this.replyID}`).removeAttr("style").hide();
  }


}

