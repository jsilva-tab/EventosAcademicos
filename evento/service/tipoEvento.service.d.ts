import { TipoEvento } from "src/shared/tipoevento.entity";
import { UpdateTipoEventoDto } from "../dto/updateTipoEvento.dto";
export declare class TipoEventoService {
    private tipoEventoRepository;
    private eventoRepository;
    update(id: number, updateDto: UpdateTipoEventoDto): Promise<TipoEvento>;
    findOne(id: number): Promise<TipoEvento>;
    findAll(): Promise<TipoEvento[]>;
}
