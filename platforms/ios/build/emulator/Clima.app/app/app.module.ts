import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { datosClimaService } from "./datosClima.service";
import { PronosticoComponent } from "./pronostico/pronostico.component";
import { InicioComponent } from "./inicio/inicio.component";

import * as platform from "platform";
declare var GMSServices: any;

if (platform.isIOS) { 
  GMSServices.provideAPIKey("AIzaSyCaIPUM_McACuLaUoyvc-RXR8S_JQHclnw");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        PronosticoComponent,
        InicioComponent
    ],
    providers: [
        datosClimaService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
