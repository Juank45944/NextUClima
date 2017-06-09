"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var datosClima_service_1 = require("../datosClima.service");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var InicioComponent = (function () {
    function InicioComponent(datosClima) {
        this.datosClima = datosClima;
        this.miUbicacion = {
            latitud: 0,
            longitud: 0,
            zoom: 0,
            bearing: 0,
            tilt: 0,
            padding: [40, 40, 40, 40]
        };
        this.buttonsFlag = "sin_ubicar";
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.permitirLocalizacion();
    };
    InicioComponent.prototype.ubicarme = function () {
        var _this = this;
        this.buttonsFlag = "sin_cercana";
        nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3 })
            .then(function (location) {
            _this.miUbicacion = {
                latitud: location.latitude,
                longitud: location.longitude,
                zoom: 11
            };
            _this.datosClima.location[0] = _this.miUbicacion.latitud;
            _this.datosClima.location[1] = _this.miUbicacion.longitud;
            var marker = new nativescript_google_maps_sdk_1.Marker();
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.miUbicacion.latitud, _this.miUbicacion.longitud);
            marker.title = "Mi ubicación";
            marker.userData = { index: 1 };
            _this.mapView.addMarker(marker);
        }, function (err) {
            console.log('Error: ' + err.message);
        });
    };
    InicioComponent.prototype.permitirLocalizacion = function () {
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
        }
    };
    InicioComponent.prototype.onMapReady = function (event) {
        this.mapView = event.object;
    };
    InicioComponent.prototype.ubicarCiudadCercana = function () {
        var _this = this;
        this.buttonsFlag = "sin_pronostico";
        this.datosClima.getCiudadCercana()
            .subscribe(function (res) {
            _this.ciudadCercana = res[0];
            _this.datosClima.woeid = _this.ciudadCercana.woeid;
            var lat = parseFloat(_this.ciudadCercana.latt_long.split(',')[0]);
            var long = parseFloat(_this.ciudadCercana.latt_long.split(',')[1]);
            var marker = new nativescript_google_maps_sdk_1.Marker();
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(lat, long);
            marker.title = "Ciudad más cercana";
            marker.userData = { index: 1 };
            _this.mapView.addMarker(marker);
        }, function (err) {
            console.log(err);
        });
    };
    return InicioComponent;
}());
InicioComponent = __decorate([
    core_1.Component({
        selector: "ns-inicio",
        moduleId: module.id,
        templateUrl: "./inicio.component.html",
    }),
    __metadata("design:paramtypes", [datosClima_service_1.datosClimaService])
], InicioComponent);
exports.InicioComponent = InicioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMEVBQXdFO0FBQ3hFLDZFQUF5RTtBQUN6RSxxRUFBcUk7QUFFckksNERBQTBEO0FBRTFELGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBTzFDLElBQWEsZUFBZTtJQWN4Qix5QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFaakQsZ0JBQVcsR0FBUTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQztZQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDNUIsQ0FBQztRQUdGLGdCQUFXLEdBQVUsWUFBWSxDQUFDO0lBRW1CLENBQUM7SUFFdEQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLDZDQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3JDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixLQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNmLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUTtnQkFDMUIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTO2dCQUM1QixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUE7WUFFRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUV0RCxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUM5QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFVixDQUFDO0lBRUQsOENBQW9CLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsZ0RBQXFCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2Q0FBbUIsR0FBbkI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxFLElBQUksTUFBTSxHQUFHLElBQUkscUNBQU0sRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsdUNBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztZQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQztBQXpFWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDO3FDQWVrQyxzQ0FBaUI7R0FkeEMsZUFBZSxDQXlFM0I7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG5pbXBvcnQgeyBkYXRvc0NsaW1hU2VydmljZSB9IGZyb20gXCIuLi9kYXRvc0NsaW1hLnNlcnZpY2VcIjtcblxucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWluaWNpb1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbmljaW8uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSW5pY2lvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1pVWJpY2FjaW9uOiBhbnkgPSB7XG4gICAgICAgIGxhdGl0dWQ6IDAsXG4gICAgICAgIGxvbmdpdHVkOiAwLFxuICAgICAgICB6b29tOiAwLFxuICAgICAgICBiZWFyaW5nOiAwLFxuICAgICAgICB0aWx0OiAwLFxuICAgICAgICBwYWRkaW5nOiBbNDAsIDQwLCA0MCwgNDBdXG4gICAgfTtcbiAgICBjaXVkYWRDZXJjYW5hOiBhbnk7XG4gICAgbWFwVmlldzogTWFwVmlldztcbiAgICBidXR0b25zRmxhZzpzdHJpbmcgPSBcInNpbl91YmljYXJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0b3NDbGltYTogZGF0b3NDbGltYVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGVybWl0aXJMb2NhbGl6YWNpb24oKTtcbiAgICB9XG5cbiAgICB1YmljYXJtZSgpIHtcbiAgICAgICAgdGhpcy5idXR0b25zRmxhZyA9IFwic2luX2NlcmNhbmFcIjtcbiAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiAzIH0pXG4gICAgICAgICAgICAudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5taVViaWNhY2lvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZDogbG9jYXRpb24ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkOiBsb2NhdGlvbi5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDExXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRvc0NsaW1hLmxvY2F0aW9uWzBdPXRoaXMubWlVYmljYWNpb24ubGF0aXR1ZDtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdG9zQ2xpbWEubG9jYXRpb25bMV09dGhpcy5taVViaWNhY2lvbi5sb25naXR1ZDtcblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubWlVYmljYWNpb24ubGF0aXR1ZCwgdGhpcy5taVViaWNhY2lvbi5sb25naXR1ZCk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnRpdGxlID0gXCJNaSB1YmljYWNpw7NuXCI7XG4gICAgICAgICAgICAgICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleDogMSB9O1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHBlcm1pdGlyTG9jYWxpemFjaW9uKCkge1xuICAgICAgICBpZiAoIWlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWFwUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgIH1cblxuICAgIHViaWNhckNpdWRhZENlcmNhbmEoKXtcbiAgICAgICAgdGhpcy5idXR0b25zRmxhZyA9IFwic2luX3Byb25vc3RpY29cIjtcbiAgICAgICAgdGhpcy5kYXRvc0NsaW1hLmdldENpdWRhZENlcmNhbmEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNpdWRhZENlcmNhbmEgPSByZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRvc0NsaW1hLndvZWlkID0gdGhpcy5jaXVkYWRDZXJjYW5hLndvZWlkO1xuICAgICAgICAgICAgICAgIGxldCBsYXQgPSBwYXJzZUZsb2F0KHRoaXMuY2l1ZGFkQ2VyY2FuYS5sYXR0X2xvbmcuc3BsaXQoJywnKVswXSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvbmcgPSBwYXJzZUZsb2F0KHRoaXMuY2l1ZGFkQ2VyY2FuYS5sYXR0X2xvbmcuc3BsaXQoJywnKVsxXSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsYXQsIGxvbmcpO1xuICAgICAgICAgICAgICAgIG1hcmtlci50aXRsZSA9IFwiQ2l1ZGFkIG3DoXMgY2VyY2FuYVwiO1xuICAgICAgICAgICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHsgaW5kZXg6IDEgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgICAgICB9LCBlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==