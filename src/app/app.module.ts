import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/home/navbar/navbar.component';
import { HeroimageComponent } from './Components/home/heroimage/heroimage.component';
import { FivestepsComponent } from './Components/home/fivesteps/fivesteps.component';
import { VideolinksComponent } from './Components/home/videolinks/videolinks.component';
import { SymptomsComponent } from './Components/home/symptoms/symptoms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroimageComponent,
    FivestepsComponent,
    VideolinksComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
