import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

// // Configs
// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//     [
//       // {
//       //     id: FacebookLoginProvider.PROVIDER_ID,
//       //     provider: new FacebookLoginProvider('554719735070210')
//       // },
//       {
//         id: GoogleLoginProvider.PROVIDER_ID,
//         provider: new GoogleLoginProvider('172160485875-3kdop1f47ekn6ue98kbru0dgss92muh2.apps.googleusercontent.com')
//       }
//     ]
//   );
//
//   return config;
// }

import { CoffeeBoardModule } from './shared/coffee-board/coffee-board.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    CoffeeBoardModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [

        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
