import { Controller, Get, Param,Query } from '@nestjs/common';
import { CursosService } from './cursos.service.js';


@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Get()
    getCursos(): string[] {
        return this.cursosService.getCursos();
    }

    @Get(":name")
    getCurso(@Param('name') name: string): string {
        console.log(name)
        return `Informações sobre o curso técnico: ${name}`
    }

    @Get(":sigla/modulo/:numero")
    getModulo(
        @Param('sigla') sigla: string, 
        @Param('numero') numero: number
    ){
        return {
            curso: sigla,
            moduloConsultado: numero,
        }

    }
//6. Consulta com filtro opcional "pesquisa/periodo" , inserir um filtro opcional "turno" . 
// Se enviar filtro "Realizando buscas para os cursos {turno}". Se não enviar "Nenhum turno informado. Listando todos os cursos"

@Get('pesquisa/:periodo')
    getPeriodo(
    @Query('turno') turno?: string
){
    if (turno) {
        return `Realizando buscas para os cursos do turno ${turno}`;
    }

    return `Nenhum turno informado. Listando todos os cursos.`;
}

  

}
