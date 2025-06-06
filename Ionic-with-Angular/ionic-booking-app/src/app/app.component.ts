import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp,RouterModule, IonRouterOutlet, IonMenu,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth')
  }
}
