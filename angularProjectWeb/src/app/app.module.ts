import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { CustomerComponent } from './page/customer/customer.component';
import { AdminComponent } from './page/admin/admin.component';
import { MainComponent } from './page/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './page/header/header.component';
import { HttpClientModule } from "@angular/common/http";

import { MatDialogModule } from '@angular/material/dialog';
////
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AmountComponent } from './page/amount/amount.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShoppingCartComponent } from './page/shopping-cart/shopping-cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { InsertmenuComponent } from './page/admin/insertmenu/insertmenu.component';
import { EditComponent } from './page/admin/edit/edit.component';

////

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AdminComponent,
    MainComponent,
    HeaderComponent,
    AmountComponent,
    ShoppingCartComponent,
    InsertmenuComponent,
    EditComponent
  ],
  imports: [
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
