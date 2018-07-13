import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NewspageComponent } from './newspage/newspage.component';
import { MenuComponent } from './menu/menu.component';
import { NewsWrapComponent } from './news-wrap/news-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SocialComponent,
    NewspageComponent,
    MenuComponent,
    NewsWrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
