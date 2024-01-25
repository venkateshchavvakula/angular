import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular';
  isDarkTheme = true;

  constructor() {}

  @HostBinding('class')
  get themeMode(): string {
    return this.isDarkTheme ? 'theme-dark' : 'theme-light';
  }
  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
