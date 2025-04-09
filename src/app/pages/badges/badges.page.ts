import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonBadge, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonList, IonBadge, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BadgesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
