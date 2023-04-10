import { Injectable } from '@angular/core';
import { BatteryInfo, Device, DeviceId, DeviceInfo, GetLanguageCodeResult, LanguageTag } from '@capacitor/device';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DeviceInfoService {

    deviceId: DeviceId | undefined;
    deviceInfo: DeviceInfo | undefined;
    languageCode: GetLanguageCodeResult | undefined;
    languageTag: LanguageTag | undefined;
    batteryInfo: BatteryInfo | undefined;

    constructor(private platform: Platform) { 
        this.getId().then((id: DeviceId) => {
            this.deviceId = id;
        });

        this.getDeviceInfo().then((deviceInfo: DeviceInfo) => {
            this.deviceInfo = deviceInfo;
        });

        this.getLanguageCode().then((languageCode: GetLanguageCodeResult) => {
            this.languageCode = languageCode;
        });

        this.getLanguageTag().then((languageTag: LanguageTag) => {
            this.languageTag = languageTag;
            console.log(this.languageCode?.value);
        });

        if (platform.is("android")) {
            this.getBatteryInfo().then((batteryInfo: BatteryInfo) => {
                this.batteryInfo = batteryInfo;
            });
        }
    }


    async getId(): Promise<DeviceId> {
        return await Device.getId();
    }

    async getLanguageCode(): Promise<GetLanguageCodeResult> {
        return await Device.getLanguageCode();
    }

    async getLanguageTag(): Promise<LanguageTag> {
        return await Device.getLanguageTag();
    }

    async getDeviceInfo(): Promise<DeviceInfo> {
        return await Device.getInfo();
    }

    async getBatteryInfo(): Promise<BatteryInfo> {
        return await Device.getBatteryInfo();
    }
}
