import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  @Input() userName!: string;
  @Input() user!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
