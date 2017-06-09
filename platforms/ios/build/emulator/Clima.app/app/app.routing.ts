import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PronosticoComponent } from "./pronostico/pronostico.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: "pronostico", component: PronosticoComponent },
    { path: "inicio", component: InicioComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }