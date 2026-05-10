import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
// import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DummyComponent } from '../../modules/dummy/dummy.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [CommonModule,
        MatSidenavModule,
        MatDividerModule,
        // FlexLayoutModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        DashboardComponent,
        PostsComponent,
        DummyComponent,
      HeaderComponent,
    SidebarComponent,
  FooterComponent,
RouterOutlet]
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
