import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PronosticoComponent } from "./pronostico/pronostico.component";

const routes: Routes = [
    { path: "", redirectTo: "/pronostico", pathMatch: "full" },
    { path: "pronostico", component: PronosticoComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }