"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datosClima_service_1 = require("../datosClima.service");
var PronosticoComponent = (function () {
    function PronosticoComponent(datosClima) {
        this.datosClima = datosClima;
        this.pronostico = [
            {
                applicable_date: "",
                min_temp: 0,
                max_temp: 0,
                humidity: "",
                weather_state_abbr: "c"
            }
        ];
    }
    PronosticoComponent.prototype.ngOnInit = function () {
        this.pronosticoCiudad();
    };
    PronosticoComponent.prototype.pronosticoCiudad = function () {
        var _this = this;
        this.datosClima.getPronostico()
            .subscribe(function (res) {
            _this.pronostico = res.consolidated_weather;
            _this.ciudadCercana = res.title;
        }, function (err) {
            console.log(err);
        });
    };
    return PronosticoComponent;
}());
PronosticoComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./pronostico.component.html",
    }),
    __metadata("design:paramtypes", [datosClima_service_1.datosClimaService])
], PronosticoComponent);
exports.PronosticoComponent = PronosticoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbm9zdGljby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ub3N0aWNvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0REFBMEQ7QUFPMUQsSUFBYSxtQkFBbUI7SUFhNUIsNkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVmpELGVBQVUsR0FBTztZQUNiO2dCQUNJLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsRUFBRTtnQkFDWixrQkFBa0IsRUFBRSxHQUFHO2FBQzFCO1NBQ0osQ0FBQTtJQUVvRCxDQUFDO0lBRXRELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUM7WUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBY2tDLHNDQUFpQjtHQWJ4QyxtQkFBbUIsQ0E0Qi9CO0FBNUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgZGF0b3NDbGltYVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0b3NDbGltYS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb25vc3RpY28uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUHJvbm9zdGljb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaXVkYWRDZXJjYW5hOnN0cmluZztcbiAgICBwcm9ub3N0aWNvOmFueSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYXBwbGljYWJsZV9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgbWluX3RlbXA6IDAsXG4gICAgICAgICAgICBtYXhfdGVtcDogMCxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBcIlwiLFxuICAgICAgICAgICAgd2VhdGhlcl9zdGF0ZV9hYmJyOiBcImNcIlxuICAgICAgICB9XG4gICAgXVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0b3NDbGltYTogZGF0b3NDbGltYVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvbm9zdGljb0NpdWRhZCgpO1xuICAgIH1cblxuICAgIHByb25vc3RpY29DaXVkYWQoKXsgIFxuICAgICAgICB0aGlzLmRhdG9zQ2xpbWEuZ2V0UHJvbm9zdGljbygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbm9zdGljbyA9IHJlcy5jb25zb2xpZGF0ZWRfd2VhdGhlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNpdWRhZENlcmNhbmEgPSByZXMudGl0bGU7XG4gICAgICAgICAgICB9LCBlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==