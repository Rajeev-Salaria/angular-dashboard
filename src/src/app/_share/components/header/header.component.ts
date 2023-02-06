import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public isMenuCollapsed:boolean = false;
 constructor(private offcanvasService: NgbOffcanvas) {}
 openTop(content: TemplateRef<any>) {
  this.offcanvasService.open(content, { position: 'top' });
}
}
