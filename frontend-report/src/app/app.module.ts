import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SetupComponent } from './setup/setup.component';
import { BruteforceComponent } from './senarios/bruteforce/bruteforce.component';
import { VsftpdComponent } from './senarios/vsftpd/vsftpd.component';
import { SQLComponent } from './senarios/sql/sql.component';
import { LFIComponent } from './senarios/lfi/lfi.component';
import { FileUploadComponent } from './senarios/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SetupComponent,
    BruteforceComponent,
    VsftpdComponent,
    SQLComponent,
    LFIComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
