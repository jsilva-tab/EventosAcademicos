import { CreateEquipeDto } from "./create-equipe.dto";
declare const UpdateEquipeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEquipeDto>>;
export declare class UpdateEquipeDto extends UpdateEquipeDto_base {
    membros_ids?: number[];
}
export {};
