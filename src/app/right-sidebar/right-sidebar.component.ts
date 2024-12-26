import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

type ILocalObject = {
  routeLink: string;
  icon: string;
  lable: string;
};
@Component({
  selector: 'app-right-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css',
})
export class RightSidebarComponent {
  /**Input q vem do app compoment */
  isRightSidebarCollapsed = input.required<boolean>();
  changeIsleftSidebarCollapse = output<boolean>()
  items: ILocalObject[] = [
    { routeLink: 'dashboard', icon: 'fal fa-home', lable: 'Dashboard' },
    { routeLink: 'products', icon: 'fal fa-box-open', lable: 'Products' },
    { routeLink: 'pages', icon: 'fal fa-file', lable: 'Pages' },
    { routeLink: 'settings', icon: 'fal fa-cog', lable: 'Settings' },
  ];

  toggleCollapse() {
    this.changeIsleftSidebarCollapse.emit(!this.isRightSidebarCollapsed());
  }
  closeSidenav() {
    this.changeIsleftSidebarCollapse.emit(true);
  }
}
