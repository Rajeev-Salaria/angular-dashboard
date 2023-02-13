import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {

  }
  ngAfterViewInit(): void {
    let root = this.renderer.selectRootElement('#initial-loader');
    this.renderer.setStyle(root, 'display', 'none');
  }


}
