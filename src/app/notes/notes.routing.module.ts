import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotesComponent } from './containers/notes/notes.component';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';


const notesRoutes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: '', component: NotesComponent, children: [
    { path: 'new', component: NoteDetailsComponent },
    { path: ':noteId', component: NoteDetailsComponent },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(notesRoutes)
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule {}