import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh20201113SharedModule } from 'app/shared/shared.module';
import { Jh20201113CoreModule } from 'app/core/core.module';
import { Jh20201113AppRoutingModule } from './app-routing.module';
import { Jh20201113HomeModule } from './home/home.module';
import { Jh20201113EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh20201113SharedModule,
    Jh20201113CoreModule,
    Jh20201113HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh20201113EntityModule,
    Jh20201113AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jh20201113AppModule {}
