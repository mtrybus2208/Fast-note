import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes.routing.module';
import { SharedModule } from './../shared/shared.module';

import { reducers, effects } from './store';
import { NotesComponent } from './containers/notes/notes.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteSidebarComponent } from './components/notes-sidebar/notes-sidebar.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteItemComponent,
    NoteDetailsComponent,
    NoteFormComponent,
    NoteSidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('notes', reducers),
    EffectsModule.forFeature(effects),
    NotesRoutingModule,
    SharedModule,
  ],
  providers: [DatePipe],
  exports: []
})
export class NotesModule { }
