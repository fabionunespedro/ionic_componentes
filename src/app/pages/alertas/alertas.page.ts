import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertasPage {

  constructor(private AlertController: AlertController) { }

  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Título da Mensagem',
      subHeader: 'Sbtítulo da Mensagem(opcional)',
      message: 'A mensagem deve ser uma frase curta e completa.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presnetAlertMultipleButtons() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    })

    await alert.present();
  }
  async presentAlertConfirm() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Texto da mensagem!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelou');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    })
  }
}

