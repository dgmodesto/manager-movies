import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { InMemoryDataService } from '@src/app/in-memory-data.service';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieFormComponent } from '@src/app/pages/movie-form/movie-form.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';
import { MobActionBarComponent } from '@src/app/shared/components/mob-action-bar/mob-action-bar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from '@nativescript/angular';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MovieListComponent,
    MobActionBarComponent,
    MovieFormComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptUISideDrawerModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { put204: false, dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
