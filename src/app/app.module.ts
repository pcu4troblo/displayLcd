import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NumbersService } from './services/numbers.service';
import { AssignmentsService } from './services/assignments.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NumbersService, AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
