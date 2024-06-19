import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './head-foot/header/header.component';
import { FooterComponent } from './head-foot/footer/footer.component';
import { SubHeaderComponent } from './head-foot/sub-header/sub-header.component';
import { GetPlayersService } from '../services/get-players.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GetPlayersService,
    CardComponent,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
