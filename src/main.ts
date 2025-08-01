

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

import {bootstrapApplication} from "@angular/platform-browser";
import {Popup} from "./popup/Popup";

bootstrapApplication(Popup)
    .catch((err) => console.error(err));

console.log("Hello World!");

