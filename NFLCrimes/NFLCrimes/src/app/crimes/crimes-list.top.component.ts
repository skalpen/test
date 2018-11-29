import { Component} from '@angular/core';
import { TopCrimesDataService } from '../top-crimes-data.service';
import { ITopCrime } from './crimes.top.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'nfl-crimes-top',
    templateUrl: './crimes-list.top.component.html'
})
export class TopCrimes {
    
    topCrimes: Observable<ITopCrime[]>;

    constructor(private topData: TopCrimesDataService) {}
    
    listTitle: string = 'Top Crimes'

    ngOnInit(): void {
        this.topCrimes = this.topData.getTopCrimes();
    }

    
} 