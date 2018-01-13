import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import { debounceTime, map, filter } from 'rxjs/operators';

import { fadeItems } from './../../../shared/animations';
import { Note } from './../../../shared/models/note.model';

@Component({
  selector: 'app-notes-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss'],
  animations: [
    fadeItems({ enter: 400, leave: 0, stagger: 0 }),
  ]
})
export class NoteSidebarComponent implements OnInit, AfterViewInit {

  @Input() notes: Array<Note>;
  @Input() loading: boolean;
  @Input() notesCount: number;
  @Input() activeId: string;
  @Output() createSelected = new EventEmitter<boolean>();
  @Output() noteSelected = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() filter = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {}

  ngAfterViewInit() {
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        map((e: any) => e.target.value),
      )
      .subscribe((value) => {
        this.filter.emit(value);
      });
  }

  selectNoteToCreate() {
    this.createSelected.emit(true);
  }

  selectNoteToDisplay(id: string) {
    this.noteSelected.emit(id);
  }
}
