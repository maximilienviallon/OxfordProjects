import {PipeTransform, Pipe} from '@angular/core';
import { IRace, IPastRace, IFutureRace } from '../races.service';

@Pipe({
    name:'futureRaceFilter'
})
//this pipe file just like all the other pipe files allow for sorting data from a list of race/participants based on the searchTerm aka
// the search input
export class futureRaceFilterPipe implements PipeTransform{
    transform(futureraces: IFutureRace[], searchTerm: string): IFutureRace[] {
            if (!futureraces || !searchTerm){
                return futureraces;
            }

            return futureraces.filter(futurerace =>
                futurerace.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            }
        }