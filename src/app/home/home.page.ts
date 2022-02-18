import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController
  ) {}

  public async login(): Promise<void> {
    await this.showLoading();
    await this.wait();
    await this.hideLoading();
    await this.showToast();
  }

  private async showToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Invalid credentials.',
      color: 'danger',
    });

    await toast.present();
  }

  private async showLoading(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Signing in...',
    });

    await loading.present();
  }

  private async hideLoading(): Promise<void> {
    await this.loadingController.dismiss();
  }

  private async wait(ms = 1000): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
