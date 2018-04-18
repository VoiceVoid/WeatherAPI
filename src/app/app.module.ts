import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { WeatherService } from './services/weather.service';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TestComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
