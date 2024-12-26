import { Component, HostListener, signal } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RightSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isRightSidebarCollapsed = signal<boolean>(false);
  /**pegaremos o tamanho da ela */
  screnWidth = signal<number>(window.innerWidth);
  /**HostListener ficará observando o tamanho da ela, em caso de small devices faremos a ela responsiva */
  @HostListener('window:resize')
  onResize() {
    /**Atualizando a tela com valor atual */
    this.screnWidth.set(window.innerWidth);
    if (this.screnWidth() < 768) {
      /**Com isto eu fechi«o sidebar em caso de devices portateis */
      this.isRightSidebarCollapsed.set(true);
      
    } 
  }

  changeIsleftSidebarCollapse(isRightSidebarCollapsed: boolean) {
    this.isRightSidebarCollapsed.set(isRightSidebarCollapsed);
  }
}
