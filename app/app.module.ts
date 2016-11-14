import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { BodyComponent } from './body/body.component';
import { HeadComponent } from './head/head.component';
import { HttpModule } from '@angular/http'
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeadComponent, BodyComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
