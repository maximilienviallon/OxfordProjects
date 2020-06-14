import {PipeTransform, Pipe} from '@angular/core';
import { IRace, IPastRace, IFutureRace } from '../races.service';

@Pipe({
    name:'futureRaceFilter'
})

export class futureRaceFilterPipe implements PipeTransform{
    transform(futureraces: IFutureRace[], searchTerm: string): IFutureRace[] {
            if (!futureraces || !searchTerm){
                return futureraces;
            }

            return futureraces.filter(futurerace =>
                futurerace.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            }
        }