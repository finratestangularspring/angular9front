import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayresultsComponent } from './displayresults/displayresults.component';
import { AppComponent } from './app.component';
import { TelephonenumberformComponent } from './telephonenumberform/telephonenumberform.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: TelephonenumberformComponent },
    { path: 'displayresults/:phone/:page', component: DisplayresultsComponent },
    // { path: 'telephonenumber', component: TelephonenumberformComponent },
    { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }