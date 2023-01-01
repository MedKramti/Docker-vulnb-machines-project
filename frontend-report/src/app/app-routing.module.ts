import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BruteforceComponent } from './senarios/bruteforce/bruteforce.component';
import { VsftpdComponent } from './senarios/vsftpd/vsftpd.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: 'brute-force', component: BruteforceComponent },
  { path: 'vsftpd', component: VsftpdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
