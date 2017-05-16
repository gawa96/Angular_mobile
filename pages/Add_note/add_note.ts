import { Component,Input, Output, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Category } from '../../app/classe';
import { Note } from '../../app/classe';
@Component({
  selector: 'page-Add-note',
  templateUrl: 'add_Note.html'
})
export class addNotePage {
	@Input() note: Note;
	@Input() categories : Category;
  constructor(public navCtrl: NavController) {

  }

}
