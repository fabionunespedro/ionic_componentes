import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCol, IonButton, IonRow, IonIcon, IonLabel, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonImg, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonItem, IonLabel, IonIcon, IonRow, IonButton, IonCol, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CartaoPage implements OnInit {

  constructor() {
    addIcons({pin,wifi,wine,warning,walk});
  }

  ngOnInit() {
  }

}
