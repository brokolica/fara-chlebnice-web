import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdministrationComponent } from './administration/administration.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { canActivate } from './services/authorization.service';

const routes: Routes = [
  { title: 'O farnosti', path: 'about', component: AboutComponent },
  { title: 'Oznamy', path: 'announcements', pathMatch: 'full', component: AnnouncementsComponent },
  { title: 'Správa oznamov', path: 'administration', pathMatch: 'prefix', component: AdministrationComponent, canActivate: [canActivate] },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about' } /* TODO: page-not-found component */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
