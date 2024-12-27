import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  /**Fazendo o sidebar voltar a ficar aberto guando quando for para devices maiores de 768 px */
  isRightSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();


  sizeClass = computed(() => {
    const isRightSidebarCollapsed = this.isRightSidebarCollapsed();
    if (isRightSidebarCollapsed) {
      return '';
    }
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  });


}
