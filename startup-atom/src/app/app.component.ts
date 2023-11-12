import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './image-slider/image-slider/image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'startup-atom';
  slides : SlideInterface[] = [
    { url: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg', title: 'beach' },
    { url: 'https://image.petmd.com/files/styles/978x550/public/2023-09/how-smart-are-cats.jpg', title: 'boat' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg', title: 'forest' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.fadeOutAtom();
    }, 1500);
  }

  fadeOutAtom() {
    const atomElement = document.querySelector('.atom') as HTMLElement;
    if (atomElement) {
      atomElement.style.transition = 'opacity 1.5s';
      atomElement.style.opacity = '0';
      setTimeout(() => {
        atomElement.remove();
      }, 1500);
    }
  }
}
