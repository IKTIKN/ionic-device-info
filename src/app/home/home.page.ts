import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class HomePage {
    title: string = 'Device';

    constructor(public device: DeviceInfoService) {
    }
}
