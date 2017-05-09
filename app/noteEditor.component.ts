import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './classe';
import { Category } from './classe';



@Component({
  selector: 'noteeditor',
  templateUrl: 'templates/noteEdit.html',
})
export class NoteEditorComponent{ 

	/// dans le Input tu met le Constructeur Note dans la variable noteEdit voir noteHandler.html la balise
	@Input() noteEdit: Note;
	@Input() categories : Category;
	@Output() closeModify:EventEmitter<any> = new EventEmitter();

	oldNote : Note;
	//We copy the object to the initialisation
	ngOnInit(){	
		this.oldNote = Object.assign({},this.noteEdit);
	}

	//We send a message to the parent to close the window & to save the note
	SaveNote(noteEdit: Note){
		this.closeModify.emit(noteEdit);
	}
	
	//When canceling, we put the old values in the real object.
	CancelEdit(){
		this.closeModify.emit(this.noteEdit);
	}
}