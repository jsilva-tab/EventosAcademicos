"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAtividadeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_atividade_dto_1 = require("./create-atividade.dto");
class UpdateAtividadeDto extends (0, mapped_types_1.PartialType)(create_atividade_dto_1.CreateAtividadeDto) {
}
exports.UpdateAtividadeDto = UpdateAtividadeDto;
//# sourceMappingURL=update-atividade.dto.js.map