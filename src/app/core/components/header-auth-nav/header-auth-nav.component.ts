import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header-auth-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header-auth-nav.component.html',
  styleUrls: ['./header-auth-nav.component.scss']
})
export class HeaderAuthNavComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }

}
