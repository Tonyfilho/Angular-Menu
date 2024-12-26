import { Routes } from '@angular/router';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { SettingsComponentComponent } from './components/settings-component/settings-component.component';
import { PagesComponentComponent } from './components/pages-component/pages-component.component';

export const routes: Routes = [

    
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponentComponent},
        { path: 'products', component: ProductsComponentComponent },
        { path: 'settings', component: SettingsComponentComponent },
        { path: 'pages', component: PagesComponentComponent },
      
];
