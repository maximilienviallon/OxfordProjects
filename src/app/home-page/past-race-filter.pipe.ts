import {PipeTransform, Pipe} from '@angular/core';
import { IRace, IPastRace, IFutureRace } from '../races.service';

@Pipe({
    name:'pastRaceFilter'
})
export class pastRaceFilterPipe implements PipeTransform{
    transform(pastraces: IPastRace[], searchTerm: string): IPastRace[] {
            if (!pastraces || !searchTerm){
                return pastraces;
            }

            return pastraces.filter(pastrace =>
                pastrace.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            }
        }