import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './../../../shared/models/note.model';

@Component({
  selector: 'app-note-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit, OnChanges {

  @Input() note: Note;
  @Input() activeId: string;
  @Output() noteSelected = new EventEmitter<string>();
  isActive: boolean;

  constructor(private router: Router) { }

  ngOnInit() { }

  ngOnChanges() {
    this.isActive = (this.activeId === this.note._id) ? true : false;
  }

  selectNoteToDisplay(id: string) {
    this.noteSelected.emit(id);
  }

}
