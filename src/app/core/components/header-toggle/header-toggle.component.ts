import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header-toggle.component.html',
  styleUrls: ['./header-toggle.component.scss']
})
export class HeaderToggleComponent implements OnInit {

  @Input() sidebarStatus: boolean;
  @Output() sidebarToggle = new EventEmitter<boolean>();

  constructor( ) { }

  ngOnInit() { }

  onSidebarToggle() {
    this.sidebarToggle.emit(!this.sidebarStatus);
  }

}
