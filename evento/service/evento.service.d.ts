import { CreateEventoDto } from "../dto/create-evento.dto";
import { UpdateEventoDto } from "../dto/update-evento.dto";
export declare class EventoService {
    private eventos;
    create(createDto: CreateEventoDto): {
        nome: string;
        descricao: string;
        data_inicio: Date;
        data_fim: Date;
        local: string;
        organizador_id: number;
        tipo_evento_id: number;
        id: number;
    };
    findAll(): any[];
    findEventosAtivos(): any[];
    findOne(id: number): any;
    update(id: number, updateDto: UpdateEventoDto): any;
    cancelarEvento(id: number): any;
}
