import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  constructor(private renderer:Renderer2) { }
  ngAfterViewInit(): void {
    let root = this.renderer.selectRootElement('#initial-loader');
    this.renderer.setStyle(root, 'display', 'none');
  }
}
