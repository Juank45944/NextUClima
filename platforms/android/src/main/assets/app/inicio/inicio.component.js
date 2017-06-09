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
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.permitirLocalizacion();
    };
    InicioComponent.prototype.ubicarme = function () {
        var _this = this;
        nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3 })
            .then(function (location) {
            _this.miUbicacion = {
                latitud: location.latitude,
                longitud: location.longitude
            };
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
    InicioComponent.prototype.ubicarCiudadercana = function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMEVBQXdFO0FBQ3hFLDZFQUF5RTtBQUN6RSxxRUFBcUk7QUFFckksNERBQTBEO0FBRTFELGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBTzFDLElBQWEsZUFBZTtJQU14Qix5QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBSSxDQUFDO0lBRXRELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRyw2Q0FBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsS0FBSSxDQUFDLFdBQVcsR0FBRztnQkFDZixPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzFCLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUzthQUMvQixDQUFBO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkcsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVELDhDQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0NBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLGdEQUFxQixFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsNENBQWtCLEdBQWxCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRSxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7WUFDcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFHTCxzQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDekMsQ0FBQztxQ0FPa0Msc0NBQWlCO0dBTnhDLGVBQWUsQ0E0RDNCO0FBNURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuaW1wb3J0IHsgZGF0b3NDbGltYVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0b3NDbGltYS5zZXJ2aWNlXCI7XG5cbnJlZ2lzdGVyRWxlbWVudCgnTWFwVmlldycsICgpID0+IE1hcFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pbmljaW9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaW5pY2lvLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEluaWNpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBtaVViaWNhY2lvbjogYW55O1xuICAgIGNpdWRhZENlcmNhbmE6IGFueTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRvc0NsaW1hOiBkYXRvc0NsaW1hU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wZXJtaXRpckxvY2FsaXphY2lvbigpO1xuICAgIH1cblxuICAgIHViaWNhcm1lKCkge1xuICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IDMgfSlcbiAgICAgICAgICAgIC50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pVWJpY2FjaW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkOiBsb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWQ6IGxvY2F0aW9uLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubWlVYmljYWNpb24ubGF0aXR1ZCwgdGhpcy5taVViaWNhY2lvbi5sb25naXR1ZCk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnRpdGxlID0gXCJNaSB1YmljYWNpw7NuXCI7XG4gICAgICAgICAgICAgICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleDogMSB9O1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHBlcm1pdGlyTG9jYWxpemFjaW9uKCkge1xuICAgICAgICBpZiAoIWlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWFwUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgIH1cblxuICAgIHViaWNhckNpdWRhZGVyY2FuYSgpe1xuICAgICAgICB0aGlzLmRhdG9zQ2xpbWEuZ2V0Q2l1ZGFkQ2VyY2FuYSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY2l1ZGFkQ2VyY2FuYSA9IHJlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdG9zQ2xpbWEud29laWQgPSB0aGlzLmNpdWRhZENlcmNhbmEud29laWQ7XG4gICAgICAgICAgICAgICAgbGV0IGxhdCA9IHBhcnNlRmxvYXQodGhpcy5jaXVkYWRDZXJjYW5hLmxhdHRfbG9uZy5zcGxpdCgnLCcpWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9uZyA9IHBhcnNlRmxvYXQodGhpcy5jaXVkYWRDZXJjYW5hLmxhdHRfbG9uZy5zcGxpdCgnLCcpWzFdKTtcblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCwgbG9uZyk7XG4gICAgICAgICAgICAgICAgbWFya2VyLnRpdGxlID0gXCJDaXVkYWQgbcOhcyBjZXJjYW5hXCI7XG4gICAgICAgICAgICAgICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleDogMSB9O1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgICAgIH0sIGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuXG59XG4iXX0=