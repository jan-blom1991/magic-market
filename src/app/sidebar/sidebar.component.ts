import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
    isCollapsed: boolean;

    toggleSidebar(): void {
        if (this.isCollapsed) {
            document.getElementById('sidebar').style.width = '200px';
            this.isCollapsed = false;
        } else {
            document.getElementById('sidebar').style.width = '0px';
            this.isCollapsed = true;
        }
    }
}
