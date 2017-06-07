"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var datosClimaService = (function () {
    function datosClimaService(http) {
        this.http = http;
        this.location = [40.771520, -73.973965];
    }
    datosClimaService.prototype.getCiudadCercana = function () {
        this.url = 'https://www.metaweather.com/api/location/search/?lattlong=' + this.location[0] + ',' + this.location[1];
        console.log(this.url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NDbGltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0b3NDbGltYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxtQkFBaUI7QUFJakIsSUFBYSxpQkFBaUI7SUFLMUIsMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDlCLGFBQVEsR0FBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUtuRCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyw0REFBNEQsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRywyQ0FBMkMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksaUJBQWlCO0lBRDdCLGlCQUFVLEVBQUU7cUNBTWlCLFdBQUk7R0FMckIsaUJBQWlCLENBb0I3QjtBQXBCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgZGF0b3NDbGltYVNlcnZpY2Uge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGxvY2F0aW9uIDogQXJyYXk8bnVtYmVyPiA9IFs0MC43NzE1MjAsIC03My45NzM5NjVdOyBcbiAgICB3b2VpZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XG5cbiAgICB9XG5cbiAgICBnZXRDaXVkYWRDZXJjYW5hKCl7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vd3d3Lm1ldGF3ZWF0aGVyLmNvbS9hcGkvbG9jYXRpb24vc2VhcmNoLz9sYXR0bG9uZz0nK3RoaXMubG9jYXRpb25bMF0rJywnK3RoaXMubG9jYXRpb25bMV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXJsKVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCkubWFwKHJlcz0+cmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvbm9zdGljbygpe1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL3d3dy5tZXRhd2VhdGhlci5jb20vYXBpL2xvY2F0aW9uLycrdGhpcy53b2VpZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpLm1hcChyZXM9PnJlcy5qc29uKCkpO1xuICAgIH1cblxufVxuIl19