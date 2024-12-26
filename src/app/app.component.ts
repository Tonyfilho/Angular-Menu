import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu';
}
