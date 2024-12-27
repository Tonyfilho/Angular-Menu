import { Component, HostListener, OnInit, signal } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RightSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isRightSidebarCollapsed = signal<boolean>(false);
  /**pegaremos o tamanho da ela */
  screenWidth = signal<number>(window.innerWidth);
  /**HostListener ficará observando o tamanho da ela, em caso de small devices faremos a ela responsiva */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    /**Atualizando a tela com valor atual */
    this.screenWidth.set(window.innerWidth);
    console.log("DOM EVENT ", event );
    if (this.screenWidth() < 768) {
      /**Com isto eu fechi«o sidebar em caso de devices portateis */
      this.isRightSidebarCollapsed.set(true);
      
    } 
  }
  
  changeIsleftSidebarCollapse(isRightSidebarCollapsed: boolean) {
    this.isRightSidebarCollapsed.set(isRightSidebarCollapsed);
  }
  
  /**Salvaquardando o tamanho da tela em caso de reload da pagina ou F5*/
  ngOnInit(): void {
   this.isRightSidebarCollapsed.set(this.screenWidth() < 768);
  }
}
