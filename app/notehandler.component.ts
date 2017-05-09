import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './classe';
import { Category } from './classe';


@Component({
  selector: 'noteHandler',
  templateUrl: '/templates/NoteHandler.html'
})
export class NotehandlerComponent  {
	
	@Input() note: Note;
	@Input() categories : Category;
	@Output() deleteNote:EventEmitter<any> = new EventEmitter();
	@Output() SaveNote:EventEmitter<any> = new EventEmitter();
	
	modifying = false;

	//We close the window and we send a message to the parent to save the note
	closeModify(note:Note){
		this.modifying = false;
		this.SaveNote.emit(note);
	}
}