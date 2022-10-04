import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { ReplyComponent } from './reply/reply.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { NewReplyComponent } from './new-reply/new-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ReplyComponent,
    NewCommentComponent,
    NewReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
