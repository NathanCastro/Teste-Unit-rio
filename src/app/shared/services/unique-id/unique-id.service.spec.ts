import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app -')).toBeTrue();
    });
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple time`, () => {
        const service = new UniqueIdService();
        const ids = new Set();
        for (let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });  
})
/*
foi feito o for para percorrer 50 IDs, sendo que não pode ter IDs iguais
e com isso foi usado o metodo SET que não deixa repetir.
*/