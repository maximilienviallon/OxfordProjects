import {PipeTransform, Pipe} from '@angular/core';
import { IRace, IPastRace, IFutureRace } from '../races.service';

@Pipe({
    name:'raceFilter'
})
export class RaceFilterPipe implements PipeTransform{
    transform(races: IRace[], searchTerm: string): IRace[] {
            if (!races || !searchTerm){
                return races;
            }
           
            return races.filter(race => 
                race.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            }
           
           
    }
