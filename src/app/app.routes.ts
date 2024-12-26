import { Routes } from '@angular/router';

export const routes: Routes = [

    
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'pages', component: PagesComponent },
      
];
