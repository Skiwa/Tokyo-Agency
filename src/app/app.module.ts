import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VidComponent } from './vid/vid.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FooterComponent } from './footer/footer.component';
import { SpeechComponent } from './speech/speech.component';

@NgModule({
  declarations: [
    AppComponent,
    VidComponent,
    PresentationComponent,
    ShowcaseComponent,
    FooterComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
