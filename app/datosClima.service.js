"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var datosClimaService = (function () {
    function datosClimaService(http) {
        this.http = http;
        this.location = [0, 0];
    }
    datosClimaService.prototype.getCiudadCercana = function () {
        this.url = 'https://www.metaweather.com/api/location/search/?lattlong=' + this.location[0] + ',' + this.location[1];
        console.log(this.ciudadCercana);
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    datosClimaService.prototype.getPronostico = function () {
        this.url = 'https://www.metaweather.com/api/location/' + this.woeid;
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    return datosClimaService;
}());
datosClimaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], datosClimaService);
exports.datosClimaService = datosClimaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NDbGltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0b3NDbGltYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxtQkFBaUI7QUFJakIsSUFBYSxpQkFBaUI7SUFNMUIsMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSjlCLGFBQVEsR0FBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFNbEMsQ0FBQztJQUVELDRDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsNERBQTRELEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsMkNBQTJDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGlCQUFpQjtJQUQ3QixpQkFBVSxFQUFFO3FDQU9pQixXQUFJO0dBTnJCLGlCQUFpQixDQXFCN0I7QUFyQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIGRhdG9zQ2xpbWFTZXJ2aWNlIHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBsb2NhdGlvbiA6IEFycmF5PG51bWJlcj4gPSBbMCwgMF07IFxuICAgIHdvZWlkIDogc3RyaW5nO1xuICAgIGNpdWRhZENlcmNhbmEgOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XG5cbiAgICB9XG5cbiAgICBnZXRDaXVkYWRDZXJjYW5hKCl7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vd3d3Lm1ldGF3ZWF0aGVyLmNvbS9hcGkvbG9jYXRpb24vc2VhcmNoLz9sYXR0bG9uZz0nK3RoaXMubG9jYXRpb25bMF0rJywnK3RoaXMubG9jYXRpb25bMV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2l1ZGFkQ2VyY2FuYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpLm1hcChyZXM9PnJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGdldFByb25vc3RpY28oKXtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly93d3cubWV0YXdlYXRoZXIuY29tL2FwaS9sb2NhdGlvbi8nK3RoaXMud29laWQ7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsKS5tYXAocmVzPT5yZXMuanNvbigpKTtcbiAgICB9XG5cbn1cbiJdfQ==