import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InfoPopoverComponent } from '../components/info-popover/info-popover.component';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, InfoPopoverComponent],
})
export class HomePage {
    title: string = 'Device';

    idInfoText = 'The UUID of the device as available to the app. This identifier may change \
        on modern mobile platforms that only allow per-app install UUIDs. \
        On web, a random identifier is generated and stored on localStorage for subsequent calls. \
        If localStorage is not available a new random identifier will be generated on every call.';
    nameInfoText = 'The name of the device. For example, "John\'s iPhone". This is only supported on iOS and Android 7.1 or above.';
    modelInfoText = 'The device model. For example: "iPhone13".';
    platformInfoText = 'The device platform ( ios | android | web ).';
    osInfoText = 'The operating currently installed on this device.';
    versionInfoText = 'The version of the installed operating system on this device.';
    manufacturerInfoText = 'The manufacturer of this device.';
    virtualInfoText = 'Whether the app is running in a simulator/emulator.';
    memInfoText = 'Approximate memory used by the current app, in bytes.';
    diskFreeInfoText = 'How much free disk space is available on the normal data storage path for the os,\
        in bytes. On Android it returns the free disk space on the "system" \
        partition holding the core Android OS. \
        On iOS this value is not accurate.';
    diskTotalInfoText = 'How much free disk space is available on the normal data storage, in bytes.';
    realDiskFreeInfoText = 'How much free disk space is available on the normal data storage, in bytes.';
    realDiskTotalInfoText = 'The total size of the normal data storage path, in bytes.';
    webViewInfoText = 'The total size of the normal data storage path, in bytes.';
    batteryLevelInfoText = 'A percentage (0 to 100) indicating how much the battery is charged.';
    chargingInfoText = 'Indicates whether the device is charging.';

    languageCodeInfoText = 'Two character language code.';
    languageTagInfoText = 'IETF BCP 47 language tag.';

    constructor(public device: DeviceInfoService) {
    }
}
