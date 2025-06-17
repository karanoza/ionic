import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonInput,IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonSpinner, LoadingController, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonButton,IonGrid,IonRow,IonCol,IonSpinner,IonList,IonItem,IonInput,IonLabel,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private loadingCtrl:LoadingController,private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
    .create({keyboardClose:true, message: 'Logging in...'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() =>{
      this.isLoading = false;
      loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover')
    }, 1500)
    })  
    
  }

}
