import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './compo/thank-you/thank-you.component';
import { HomeComponent } from './compo/home/home.component';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    ThankYouComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'thanks',component:ThankYouComponent},
      {path:'',component:HomeComponent},
      {path:'**',redirectTo:'',pathMatch:'full'}
    ],{useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
