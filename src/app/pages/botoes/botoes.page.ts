import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle,IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon}
from '@ionic/angular/standalone';
import { star } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.page.html',
  styleUrls: ['./botoes.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class BotoesPage implements OnInit {
  constructor() {}

  ngOnInit() {
    addIcons({ star });
  }
}
