import { CreateEventoDto } from "../dto/create-evento.dto";
import { UpdateEventoDto } from "../dto/update-evento.dto";
import { EventoService } from "../service/evento.service";
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    create(createDto: CreateEventoDto): Promise<{
        nome: string;
        descricao: string;
        data_inicio: Date;
        data_fim: Date;
        local: string;
        organizador_id: number;
        tipo_evento_id: number;
        id: number;
    }>;
    findAll(): Promise<any[]>;
    findActive(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateDto: UpdateEventoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
