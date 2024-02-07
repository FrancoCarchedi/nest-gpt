import { OrthographyDto } from './dtos/orthography.dto';
import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {

  // Solo va a llamar casos de uso
  
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase({
      prompt: orthographyDto.prompt
    });
  }


}
