import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { LogFinishedQuestionComponent } from './log-finished-question/log-finished-question.component';
import { RankingsComponent } from './rankings/rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CalendarComponent,
    StatisticsComponent,
    AddQuestionComponent,
    LogFinishedQuestionComponent,
    RankingsComponent
  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
