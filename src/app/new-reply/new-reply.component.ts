import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss']
})
export class NewReplyComponent implements OnInit {

  @Input() userName!: string;
  @Input() user!: string;

  constructor() { }

  ngOnInit(): void {
  }


}
