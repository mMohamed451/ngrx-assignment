import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { reducers } from './reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
   !environment.production? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }): []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
