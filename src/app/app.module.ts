import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { EurifyPipe } from './shared/eurify.pipe';
import { StarComponent } from './shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './shared/welcome.component';
import { NotFoundComponent } from './shared/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    EurifyPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
