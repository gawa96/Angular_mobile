import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { addNotePage } from '../pages/Add_note/add_note';
import { AddCategoryPage } from '../pages/add_category/add_category';
import { NoteComponent } from './note.component';
import { NotehandlerComponent } from './notehandler.component';
import { NoteEditorComponent } from './noteEditor.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

	addNotePage,
	AddCategoryPage,
	NoteComponent,
	NotehandlerComponent,
	NoteEditorComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

	addNotePage,
	AddCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
