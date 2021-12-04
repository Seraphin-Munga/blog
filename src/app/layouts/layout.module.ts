import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { SiteLayoutComponent } from './site-layout/site-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiteLayoutComponent
  ],
  imports: [CommonModule, NzAlertModule, NzLayoutModule, NzIconModule, RouterModule, NzGridModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
