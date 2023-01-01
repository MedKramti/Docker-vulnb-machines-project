import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SetupComponent } from './setup/setup.component';
import { BruteforceComponent } from './senarios/bruteforce/bruteforce.component';
import { VsftpdComponent } from './senarios/vsftpd/vsftpd.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SetupComponent,
    BruteforceComponent,
    VsftpdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
