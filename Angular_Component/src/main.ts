import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(LoginpageComponent, appConfig)
  .catch((err) => console.error(err));
