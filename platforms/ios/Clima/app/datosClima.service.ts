import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class datosClimaService {
    url: string;
    location : Array<number> = [0, 0]; 
    woeid : string;
    ciudadCercana :string;

    constructor(private http: Http){

    }

    getCiudadCercana(){
        this.url = 'https://www.metaweather.com/api/location/search/?lattlong='+this.location[0]+','+this.location[1];
        console.log(this.ciudadCercana)
        return this.http.get(this.url).map(res=>res.json());
    }

    getPronostico(){
        this.url = 'https://www.metaweather.com/api/location/'+this.woeid;
        return this.http.get(this.url).map(res=>res.json());
    }

}
