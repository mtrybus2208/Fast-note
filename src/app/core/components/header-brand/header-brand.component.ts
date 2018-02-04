import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header-brand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.scss']
})
export class HeaderBrandComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }

}
