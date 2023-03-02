import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialsModule } from './materials/materials.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule  } from '@angular/forms';
import {AddEmployesComponent} from './add-employes/add-employes.component';

@NgModule({

  declarations: [
    AppComponent,
    AddEmployesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
