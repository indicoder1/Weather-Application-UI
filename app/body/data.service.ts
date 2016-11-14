import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IWeatherData} from "./weatherData";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataService{
  private _weatherUrl = 'http://localhost:8080/getCurrentWeatherData/';

  constructor(private _http:Http){}

  getWeatherData(cityName: string): Observable<IWeatherData>{
    return this._http.get(this._weatherUrl+cityName)
      .map((response:Response) => <IWeatherData>response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().err || 'Server error');
  }
}
