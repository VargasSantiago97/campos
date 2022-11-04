import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campos';
  items: MenuItem[] = [
    {
        label: 'INICIO',
        routerLink: 'inicio'
    },
    {
        label: 'DATOS',
        items: [
          {
            label: 'SOCIOS', 
            routerLink: 'socios',
            icon: 'pi pi-fw pi-plus'
            },
            {
              label: 'Open', 
              routerLink: 'socios',
              icon: 'pi pi-fw pi-plus',
              items: [
                  {label: 'Project'},
                  {label: 'Other'},
                ]
            },
            {label: 'Quit'}
        ]
    },
    {
        label: 'REPORTES',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    }
];

}
