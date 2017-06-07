"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datosClima_service_1 = require("../datosClima.service");
var PronosticoComponent = (function () {
    function PronosticoComponent(datosClima) {
        this.datosClima = datosClima;
        this.ciudadCercana = {
            title: ""
        };
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
        this.loadPronosticos();
    };
    PronosticoComponent.prototype.loadPronosticos = function () {
        var _this = this;
        this.datosClima.getCiudadCercana()
            .subscribe(function (res) {
            _this.pronosticoCiudad(res);
        }, function (err) {
            console.log(err);
        });
    };
    PronosticoComponent.prototype.pronosticoCiudad = function (res) {
        var _this = this;
        this.ciudadCercana = res[0];
        this.datosClima.woeid = this.ciudadCercana.woeid;
        this.datosClima.getPronostico()
            .subscribe(function (res) {
            _this.pronostico = res.consolidated_weather;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbm9zdGljby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ub3N0aWNvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0REFBMEQ7QUFPMUQsSUFBYSxtQkFBbUI7SUFlNUIsNkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBYmpELGtCQUFhLEdBQU87WUFDaEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsZUFBVSxHQUFPO1lBQ2I7Z0JBQ0ksZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGtCQUFrQixFQUFFLEdBQUc7YUFDMUI7U0FDSixDQUFBO0lBRW9ELENBQUM7SUFFdEQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixHQUFHO1FBQXBCLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDO1FBQy9DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBZ0JrQyxzQ0FBaUI7R0FmeEMsbUJBQW1CLENBd0MvQjtBQXhDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGRhdG9zQ2xpbWFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdG9zQ2xpbWEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9ub3N0aWNvLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFByb25vc3RpY29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2l1ZGFkQ2VyY2FuYTphbnkgPSB7XG4gICAgICAgIHRpdGxlOiBcIlwiXG4gICAgfTtcbiAgICBwcm9ub3N0aWNvOmFueSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYXBwbGljYWJsZV9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgbWluX3RlbXA6IDAsXG4gICAgICAgICAgICBtYXhfdGVtcDogMCxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBcIlwiLFxuICAgICAgICAgICAgd2VhdGhlcl9zdGF0ZV9hYmJyOiBcImNcIlxuICAgICAgICB9XG4gICAgXVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0b3NDbGltYTogZGF0b3NDbGltYVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZFByb25vc3RpY29zKCk7XG4gICAgfVxuXG4gICAgbG9hZFByb25vc3RpY29zKCl7XG4gICAgICAgIHRoaXMuZGF0b3NDbGltYS5nZXRDaXVkYWRDZXJjYW5hKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ub3N0aWNvQ2l1ZGFkKHJlcyk7XG4gICAgICAgICAgICB9LCBlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9ub3N0aWNvQ2l1ZGFkKHJlcyl7XG4gICAgICAgIHRoaXMuY2l1ZGFkQ2VyY2FuYSA9IHJlc1swXTtcbiAgICAgICAgdGhpcy5kYXRvc0NsaW1hLndvZWlkID0gdGhpcy5jaXVkYWRDZXJjYW5hLndvZWlkO1xuICAgICAgICB0aGlzLmRhdG9zQ2xpbWEuZ2V0UHJvbm9zdGljbygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbm9zdGljbyA9IHJlcy5jb25zb2xpZGF0ZWRfd2VhdGhlcjtcbiAgICAgICAgICAgIH0sIGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuIl19