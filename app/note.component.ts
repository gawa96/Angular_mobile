import { Component } from '@angular/core';
import { Note } from './classe';
import { Category } from './classe';

 const Categories:Category[] = [{label: 'camion', id :1},
 								{label:'bus', id : 2 }];
 const Notes:Note[] = [ 
  { id: 1,title: 'test', content:'ceci est un test', date:'12/04/2018', category : Categories[0] }, 
  { id: 2,title: 'test2', content:'ceci est un test', date:'12/05/2014', category: Categories[0] }];

@Component({
  selector: 'note',
  templateUrl: 'templates/NoteListe.html'

})
export class NoteComponent  {
  notes = Notes;
  categories = Categories;
}
