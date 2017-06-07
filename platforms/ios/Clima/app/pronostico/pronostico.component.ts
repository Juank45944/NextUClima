import { Component, OnInit } from "@angular/core";

import { datosClimaService } from "../datosClima.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./pronostico.component.html",
})
export class PronosticoComponent implements OnInit {

    ciudadCercana:any = {
        title: ""
    };
    pronostico:any = [
        {
            applicable_date: "",
            min_temp: 0,
            max_temp: 0,
            humidity: "",
            weather_state_abbr: "c"
        }
    ]
    
    constructor(private datosClima: datosClimaService) { }

    ngOnInit(): void {
        this.loadPronosticos();
    }

    loadPronosticos(){
        this.datosClima.getCiudadCercana()
            .subscribe(res=>{
                this.pronosticoCiudad(res);
            }, err=>{
                console.log(err);
            })
    }

    pronosticoCiudad(res){
        this.ciudadCercana = res[0];
        this.datosClima.woeid = this.ciudadCercana.woeid;
        this.datosClima.getPronostico()
            .subscribe(res=>{
                this.pronostico = res.consolidated_weather;
            }, err=>{
                console.log(err)
            })
    }
}
