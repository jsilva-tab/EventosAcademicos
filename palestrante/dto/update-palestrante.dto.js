"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePalestranteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_palestrante_dto_1 = require("./create-palestrante.dto");
class UpdatePalestranteDto extends (0, mapped_types_1.PartialType)(create_palestrante_dto_1.CreatePalestranteDto) {
}
exports.UpdatePalestranteDto = UpdatePalestranteDto;
//# sourceMappingURL=update-palestrante.dto.js.map