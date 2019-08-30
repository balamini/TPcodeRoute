import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menuItems =[
  {title: 'Accueil', url: '/home', icon: 'home'},
  {title: 'Catégorie', url: '/categorie', icon: 'warning'},
  {title: 'Panneau', url: '/panneau', icon: 'warning'},
  {title: 'Quizz', url: '/quizz', icon: 'list'},
  {title: 'Préférences', url: '/preferences', icon: 'checkmark-circle'},
  {title: 'noter', url: '/noter', icon: 'star'}
]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
