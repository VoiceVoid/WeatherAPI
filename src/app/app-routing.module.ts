import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path: '', component: WeatherComponent},
{path: 'test', component: TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
