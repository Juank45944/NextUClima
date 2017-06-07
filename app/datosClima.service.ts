import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class datosClimaService {
    url: string;
    location : Array<number> = [40.771520, -73.973965]; 
    woeid : string;

    constructor(private http: Http){

    }

    getCiudadCercana(){
        this.url = 'https://www.metaweather.com/api/location/search/?lattlong='+this.location[0]+','+this.location[1];
        console.log(this.url)
        return this.http.get(this.url).map(res=>res.json());
    }

    getPronostico(){
        this.url = 'https://www.metaweather.com/api/location/'+this.woeid;
        return this.http.get(this.url).map(res=>res.json());
    }

}
