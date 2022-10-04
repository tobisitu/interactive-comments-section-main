import { Component, Input } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-comments-section-main';
  data = require('../../src/assets/data.json')
  comments = this.data.comments;
  currentUser = this.data.currentUser
  
}
