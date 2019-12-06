import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FindAllComponent } from './find-all/find-all.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CreateListComponent } from './create-list/create-list.component';

const appRoutes: Routes = [
  { path: '', component: FindAllComponent},
  { path: 'create', component: CreateListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FindAllComponent,
    HeaderComponent,
    CreateListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
