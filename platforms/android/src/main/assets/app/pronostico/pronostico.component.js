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
        this.pronosticoCiudad();
    };
    PronosticoComponent.prototype.pronosticoCiudad = function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbm9zdGljby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ub3N0aWNvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0REFBMEQ7QUFPMUQsSUFBYSxtQkFBbUI7SUFlNUIsNkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBYmpELGtCQUFhLEdBQU87WUFDaEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsZUFBVSxHQUFPO1lBQ2I7Z0JBQ0ksZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGtCQUFrQixFQUFFLEdBQUc7YUFDMUI7U0FDSixDQUFBO0lBRW9ELENBQUM7SUFFdEQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUMvQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtLQUM3QyxDQUFDO3FDQWdCa0Msc0NBQWlCO0dBZnhDLG1CQUFtQixDQTZCL0I7QUE3Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBkYXRvc0NsaW1hU2VydmljZSB9IGZyb20gXCIuLi9kYXRvc0NsaW1hLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvbm9zdGljby5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ub3N0aWNvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNpdWRhZENlcmNhbmE6YW55ID0ge1xuICAgICAgICB0aXRsZTogXCJcIlxuICAgIH07XG4gICAgcHJvbm9zdGljbzphbnkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFwcGxpY2FibGVfZGF0ZTogXCJcIixcbiAgICAgICAgICAgIG1pbl90ZW1wOiAwLFxuICAgICAgICAgICAgbWF4X3RlbXA6IDAsXG4gICAgICAgICAgICBodW1pZGl0eTogXCJcIixcbiAgICAgICAgICAgIHdlYXRoZXJfc3RhdGVfYWJicjogXCJjXCJcbiAgICAgICAgfVxuICAgIF1cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdG9zQ2xpbWE6IGRhdG9zQ2xpbWFTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb25vc3RpY29DaXVkYWQoKTtcbiAgICB9XG5cbiAgICBwcm9ub3N0aWNvQ2l1ZGFkKCl7ICBcbiAgICAgICAgdGhpcy5kYXRvc0NsaW1hLmdldFByb25vc3RpY28oKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb25vc3RpY28gPSByZXMuY29uc29saWRhdGVkX3dlYXRoZXI7XG4gICAgICAgICAgICB9LCBlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==