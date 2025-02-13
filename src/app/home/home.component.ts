import { Component, inject } from '@angular/core';
import { MoivesAPIService } from '../services/moivesAPI/moives-api.service';
import { Moive } from '../interface/moiveCard/moive';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  moivesAPIService = inject(MoivesAPIService) ;
  moivesResult : Moive[]=[];
  imgPath:string = 'https://image.tmdb.org/t/p/w500'
  ngOnInit():void{
    this.moivesAPIService.getMoives().subscribe((res)=>{
        this.moivesResult = res.results;
        console.log(this.moivesResult);
      }
    )
  }
}
