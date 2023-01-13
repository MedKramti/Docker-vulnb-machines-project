import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BruteforceComponent } from './senarios/bruteforce/bruteforce.component';
import { FileUploadComponent } from './senarios/file-upload/file-upload.component';
import { LFIComponent } from './senarios/lfi/lfi.component';
import { SQLComponent } from './senarios/sql/sql.component';
import { VsftpdComponent } from './senarios/vsftpd/vsftpd.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: 'brute-force', component: BruteforceComponent },
  { path: 'vsftpd', component: VsftpdComponent },
  { path: 'sql', component: SQLComponent },
  { path: 'lfi', component: LFIComponent },
  { path: 'upload', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
