import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import isEqual from 'lodash-es/isEqual';
import { state, trigger, transition, style, animate, query, stagger } from '@angular/animations';

import * as fromStore from './../../store';
import { Note } from './../../../shared/models/note.model';
import { NotePropertiesToPatch, NotePatchInfo } from './../../../shared/services/notes-api.service';
import { simpleFade } from './../../../shared/animations';

@Component({
  selector: 'app-note-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
  animations: [ simpleFade(150) ]
})
export class NoteFormComponent implements OnInit, OnDestroy, OnChanges {

  exists = false;
  noteForm: FormGroup;
  currentDate: string;
  valueChanges: boolean;
  valueSubscription$: Subscription;

  @Input() notesState: fromStore.NotesState;
  @Input() note: Note;
  @Output() create = new EventEmitter<Note>();
  @Output() update = new EventEmitter<{ patch: NotePatchInfo, note: Note }>();
  @Output() removeConfirm = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {

    this.currentDate = this.datePipe.transform(new Date(), 'dd.MM.yyyy');

    this.noteForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      importance: [1, Validators.required],
      tags: null,
    });
  }

  ngOnInit() {
    this.valueSubscription$ = this.noteForm.valueChanges.subscribe((value) => {
      this.valueChanges = true;
    });
  }

  ngOnChanges() {
    if (this.note && this.note._id) {
      this.exists = true;
      this.noteForm.patchValue(this.note);
    }
    this.valueChanges = false;
  }

  ngOnDestroy() {
    this.valueSubscription$.unsubscribe();
  }

  createNote(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      const note: Note = new Note({ ...value, date: this.currentDate, });
      this.create.emit(note);
    }
  }

  updateNote(form: FormGroup) {
    const { value, valid, touched } = form;
    if (this.valueChanges && valid) {
      const updatedNote: Note = new Note({ ...value, date: this.currentDate, _id: this.note._id});
      const updatedProps = this.compareNotes(this.note, updatedNote);
      const notePatchInfo = {
        id: this.note._id,
        updatedProps
      };
      this.update.emit({
        patch: notePatchInfo,
        note: updatedNote,
      });
    }
  }

  compareNotes(defaultNote: Note, editedNote: Note): Array<NotePropertiesToPatch> {
    return Object.keys(editedNote).reduce((diff, key) => {
      if (isEqual(defaultNote[key], editedNote[key])) { return diff; }
      diff.push({
        propName: key,
        value: editedNote[key],
      });
      return diff;
    }, []);
  }

  removeNoteConfirm() {
    this.removeConfirm.emit(this.note._id);
  }

}
