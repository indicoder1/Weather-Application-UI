import {Component} from "@angular/core";
import {IWeatherData} from "./weatherData";
import {DataService} from "./data.service";
@Component({
  selector: 'app-body',
  templateUrl: 'app/body/body.component.html'
})
export class BodyComponent{
  constructor(private _dataService: DataService){}
  weatherData: IWeatherData[]=[];
  cityName: string;
  errorMessage: string;
  addCity(): void{
    this._dataService.getWeatherData(this.cityName)
      .subscribe(iWeatherData => this.weatherData.push(iWeatherData),
                 error=> this.errorMessage=<any>error);
  }

  removeCity(): void{
    this.weatherData.splice(0,1);
  }

  closeTile(closedCityName: string): void{
    this.weatherData = this.weatherData.filter((cityData) => cityData.cityName !== closedCityName);
  }
}
