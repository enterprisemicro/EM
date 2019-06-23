import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatStepperModule, MatInputModule } from '@angular/material';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTwitter, faWeixin, faGithubAlt, faWeibo } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faBook, faUsers, faLongArrowAltRight, faTabletAlt, faLevelUpAlt, faPhone, faObjectGroup, faRocket, faCloudUploadAlt, faSquare, faMapMarkerAlt, faEnvelope, faCog, faUserShield, faCircleNotch, faHome } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEdit, faGem } from '@fortawesome/free-regular-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule,
    ScrollToModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faFacebookF, faInstagram, faTwitter, faCogs, faCog, faBook, faUsers, faLongArrowAltRight,
      faTabletAlt, faLevelUpAlt, faPhone, faObjectGroup, faRocket, faCloudUploadAlt, faSquare,
      faMapMarkerAlt, faEnvelope, faWeixin, faGithubAlt, faWeibo, faClock, faUserShield, faEdit, faGem, faCircleNotch,
      faHome);
  }
}
