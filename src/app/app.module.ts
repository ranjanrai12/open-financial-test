import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SlideToogleComponent } from './slide-toogle/slide-toogle.component';
import { FormsModule } from '@angular/forms';
import { NavbarScrollDirective } from './navbar-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RangeSliderComponent,
    DropdownComponent,
    MainSectionComponent,
    SlideToogleComponent,
    NavbarScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
