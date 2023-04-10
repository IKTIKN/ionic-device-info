import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-info-popover',
    templateUrl: './info-popover.component.html',
    styleUrls: ['./info-popover.component.scss'],
    standalone: true,
    imports: [IonicModule]
})
export class InfoPopoverComponent implements OnInit {
    @Input() id!: string;
    @Input() text!: string;

    constructor() { }

    ngOnInit() { }

}
