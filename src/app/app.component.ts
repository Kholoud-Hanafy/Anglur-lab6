import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NavbarComponent} from'./components/navbar/navbar.component';
// import{ProductComponent} from'./components/product/product.component';
import{FooterComponent} from'./components/footer/footer.component';
import{OrderComponent} from'./components/order/order.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
