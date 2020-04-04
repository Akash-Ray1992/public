import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admi-routing.module';
import { AdminService } from './admin.service';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule,
    AngularSplitModule.forRoot()
  ],
  providers: [AdminService]
})
export class AdminModule { }
