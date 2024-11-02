import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// we have to manually tell angular that look for these components in html file 
bootstrapApplication(AppComponent).catch((err) => console.error(err));
