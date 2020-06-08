import { PipeTransform, Pipe } from '@angular/core';
import { IParticipant } from '../participants.service';

@Pipe({
    name:'participantFilter'
})
export class ParticipantFilterPipe implements PipeTransform{
    transform(participants: IParticipant[], searchTerm: string): IParticipant[] {
            if (!participants || !searchTerm){
                return participants;
            }

            return participants.filter(participant => 
                participant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||participant.teamName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ) ;
    }
}