import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';

@NgModule({
    declarations: [AppComponent, jqxDateTimeInputComponent, jqxInputComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        