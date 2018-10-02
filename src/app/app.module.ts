import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Homework1Component } from './homework1/homework1.component';

@NgModule({
  // Component
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Homework1Component
  ],
  // Module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgPipesModule
  ],
  // Service
  providers: [],
  // 程式進入點
  bootstrap: [AppComponent]
})
export class AppModule { }
