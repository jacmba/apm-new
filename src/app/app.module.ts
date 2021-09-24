import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './shared/welcome.component';
import { NotFoundComponent } from './shared/not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ]), ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
