import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService{
    private numberOFGeneratedIds = 0;
    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;
    
    public generateUniqueIdWithPrefix(prefix:string):string {
        if(!prefix || !this.validId.test(prefix)){
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.generateUniqueId()
        this.numberOFGeneratedIds++;
        return `${prefix} - ${uniqueId}`;
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOFGeneratedIds;
    }

    private generateUniqueId(): string{
        return uuidv4()
    }
}

