import { Component, signal } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [ RightSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isRightSidebarCollapsed = signal<boolean>(false);

  changeIsleftSidebarCollapse(isRightSidebarCollapsed : boolean) {
   this.isRightSidebarCollapsed.set(isRightSidebarCollapsed);
  }
  
}
