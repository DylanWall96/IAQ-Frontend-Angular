import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/kitchen/kitchen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from 'src/app/data.service';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'kitchen', component: AppComponent }]),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
