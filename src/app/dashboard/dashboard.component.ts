import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authservice: AuthService) {}

  logOut() {
    const confirmation = confirm("Do you want to log out")
    if (confirmation) {
      this.authservice.logout()
  }

    }
    

}
