import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  userId = 1;

  messages = [{
    id: 0,
    username: 'Moi',
    message: 'Salut',
    image_url: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg'
  },
  {
    id: 1,
    username: 'Fitch',
    message: 'Salut !',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmjVgskdP5J3tKjOZVuem1IGmoEtcjX8SvLIkbJAdFyQ3XRcRPw'
  },
  {
    id: 0,
    username: 'Moi',
    message: 'ça va ?',
    image_url: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg'
  },
  {
    id: 1,
    username: 'Fitch',
    message: 'trkl et toi ?',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmjVgskdP5J3tKjOZVuem1IGmoEtcjX8SvLIkbJAdFyQ3XRcRPw'
  },
  {
    id: 0,
    username: 'Moi',
    message: 'ça va, ça va',
    image_url: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg'
  },
  {
    id: 1,
    username: 'Fitch',
    message: 'il fait beau de ouf !',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmjVgskdP5J3tKjOZVuem1IGmoEtcjX8SvLIkbJAdFyQ3XRcRPw'

  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
