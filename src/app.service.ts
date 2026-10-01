import { Injectable } from '@nestjs/common';

export interface IInfo {
  disciplina: string
  cargaHoraria: number
  semestre: string
  ativo: boolean
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo ao SENAI';
  }

  getInfo(): IInfo {
    return {
      disciplina: "Desenvolvimento de Sistemas Web",
      cargaHoraria: 120,
      semestre: "01/2026",
      ativo: true
    }
  }
}
