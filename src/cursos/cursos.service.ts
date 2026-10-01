import { Injectable } from '@nestjs/common';

@Injectable()
export class CursosService {
    getCursos(): string[] {
        return [
            'Desenvolvimento de Sistemas',
            'Eletrotécnica',
            'Mecânica'
        ]
    }
}
