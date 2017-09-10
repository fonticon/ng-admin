import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Renderer2
} from '@angular/core';
import { OverlayContainer } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  dark = false;
  navItems = [
    { name: 'Dashboard', route: '/' },
    { name: 'Typography', route: '/typography' },
    { name: 'Tables', route: '/tables' },
    { name: 'Forms', route: '/forms' },
    { name: 'Components', route: '/components' },
    { name: 'Sample Pages', route: '/sample-pages' }
  ];

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer) { }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._renderer.addClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = darkThemeClass;
    } else {
      this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = '';
    }
  }
}
