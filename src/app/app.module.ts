import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { LocalStorageService } from './services/LocalStorage.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

 


@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ShopListComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
   ],
  providers: [AuthService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
