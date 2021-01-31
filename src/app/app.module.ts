import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { ManageProductsComponent } from './product/manage-products.component';
import { MaintainProductComponent } from './product/maintain-product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BoosterPackComponent } from './boosterpack/boosterpack.component';
import { BoosterBoxComponent } from './boosterbox/booster-box.component';
import { ProductService } from './product/product.service';
import { StarterDeckComponent } from './starterdeck/starter-deck.component';
import { FatPackComponent } from './fatpack/fat-pack.component';
import { RegisterService } from './register/register.service';
import { CartService } from './cart/cart.service';
import { ViewProductComponent } from './product/view-product.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ContentComponent,
    SidebarComponent,
    RegisterComponent,
    MaintainProductComponent,
    ManageProductsComponent,
    ViewProductComponent,
    LoginComponent,
    CartComponent,
    BoosterPackComponent,
    BoosterBoxComponent,
    FatPackComponent,
    StarterDeckComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: '',
            component: ContentComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'maintain-product',
            component: MaintainProductComponent
        },
        {
            path: 'manage-products',
            component: ManageProductsComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'cart',
            component: CartComponent
        },
        {
            path: 'booster-pack',
            component: BoosterPackComponent
        },
        {
            path: 'booster-box',
            component: BoosterBoxComponent
        },
        {
            path: 'fat-pack',
            component: FatPackComponent
        },
        {
            path: 'starter-deck',
            component: StarterDeckComponent
        },
        {
            path: 'view-product',
            component: ViewProductComponent
        },
    ]),
  ],

  providers: [
      ProductService,
      RegisterService,
      CartService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
