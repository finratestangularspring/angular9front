import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// ROUTING
import { HttpClientModule } from '@angular/common/http';
import { DisplayresultsComponent } from './displayresults/displayresults.component';
import { TelephonenumberformComponent } from './telephonenumberform/telephonenumberform.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayresultsComponent,
    TelephonenumberformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
