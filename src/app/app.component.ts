import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Namita-Project';

  image1: any;
  image2: any;
  showOG: boolean = false;
  showBlur: boolean = false;
  showBW: boolean = false;
  showInvert: boolean = false;
  reader = new FileReader();

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();

      this.reader.readAsDataURL(event.target.files[0]);

      this.reader.onload = (event) => {
        this.image1 = event.target.result;
      };
    }
    this.showOG = true;
  }
  bwImage() {
    this.showBlur = false;
    this.showInvert = false;
    this.showBW = true;
  }

  blurImage() {
    this.showBW = false;
    this.showInvert = false;
    this.showBlur = true;
  }

  invertImage() {
    this.showBW = false;
    this.showBlur = false;
    this.showInvert = true;
  }
}
