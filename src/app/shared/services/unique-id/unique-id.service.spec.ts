import { UniqueIdService } from './unique-id.service';



describe('UniqueIdService', () => { 
    
    let service: UniqueIdService = null
    beforeEach(() => {
        const service = new UniqueIdService();
    })
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app -')).toBeTrue();
    });
    
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple time`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });  
   
    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of genetadedIds when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });
})

