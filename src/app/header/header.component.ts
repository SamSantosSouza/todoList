import { Component } from '@angular/core';
import { ViewChild, } from '@angular/core';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDivider } from "@angular/material/divider";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatMenu, MatDivider],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
}
