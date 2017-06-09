import { Component, OnInit } from "@angular/core";
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";

import { datosClimaService } from "../datosClima.service";

registerElement('MapView', () => MapView);

@Component({
    selector: "ns-inicio",
    moduleId: module.id,
    templateUrl: "./inicio.component.html",
})
export class InicioComponent implements OnInit {

    miUbicacion: any;
    ciudadCercana: any;
    mapView: MapView;

    constructor(private datosClima: datosClimaService) { }

    ngOnInit() {
        this.permitirLocalizacion();
    }

    ubicarme() {
        getCurrentLocation({ desiredAccuracy: 3 })
            .then(location => {
                this.miUbicacion = {
                    latitud: location.latitude,
                    longitud: location.longitude
                }

                let marker = new Marker();
                marker.position = Position.positionFromLatLng(this.miUbicacion.latitud, this.miUbicacion.longitud);
                marker.title = "Mi ubicación";
                marker.userData = { index: 1 };
                this.mapView.addMarker(marker);
            }, err => {
                console.log('Error: ' + err.message);
            })

    }

    permitirLocalizacion() {
        if (!isEnabled()) {
            enableLocationRequest();
        }
    }

    onMapReady(event) {
        this.mapView = event.object;
    }

    ubicarCiudadercana(){
        this.datosClima.getCiudadCercana()
            .subscribe(res=>{
                this.ciudadCercana = res[0];
                this.datosClima.woeid = this.ciudadCercana.woeid;
                let lat = parseFloat(this.ciudadCercana.latt_long.split(',')[0]);
                let long = parseFloat(this.ciudadCercana.latt_long.split(',')[1]);

                let marker = new Marker();
                marker.position = Position.positionFromLatLng(lat, long);
                marker.title = "Ciudad más cercana";
                marker.userData = { index: 1 };
                this.mapView.addMarker(marker);
            }, err=>{
                console.log(err);
            })
    }


}
