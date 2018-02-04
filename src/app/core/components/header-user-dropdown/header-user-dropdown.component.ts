import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header-user-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header-user-dropdown.component.html',
  styleUrls: ['./header-user-dropdown.component.scss']
})
export class HeaderUserDropdownComponent implements OnInit {

  @Input() userEmail: string;
  @Output() signOut = new EventEmitter<null>();

  constructor( ) { }

  ngOnInit() { }

  onSignOut() {
    this.signOut.emit(null);
  }

}
