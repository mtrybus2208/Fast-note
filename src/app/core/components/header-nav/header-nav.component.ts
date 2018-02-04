import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Input() authenticated: boolean;
  @Input() userEmail: string;
  @Input() sidebarStatus: boolean;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  @Output() signOut = new EventEmitter<null>();

  constructor( ) { }

  ngOnInit() { }

  onSidebarToggle(event: boolean) {
    this.sidebarToggle.emit(event);
  }

  onSignOut() {
    this.signOut.emit(null);
  }
}
