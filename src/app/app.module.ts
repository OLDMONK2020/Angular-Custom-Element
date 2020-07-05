import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [JokeComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el1 = createCustomElement(JokeComponent, {
      injector: this.injector
    });
    customElements.define('joke-custom-element', el1);
  }
  ngDoBootstrap() { }
}
