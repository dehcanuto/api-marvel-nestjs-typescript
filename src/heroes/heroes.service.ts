import { Injectable } from '@nestjs/common';
import md5 from 'js-md5';
import {
  MARVEL_ENDPOINT,
  MARVEL_LIMIT,
  MARVEL_PUBLIC_KEY,
} from 'src/common/constants';

@Injectable()
export class HeroesService {
  async findAll() {
    const timestamp = Number(new Date());
    const hash = md5.create();

    const response = await fetch(
      `${MARVEL_ENDPOINT}?ts=${timestamp}&orderBy=name&limit=${MARVEL_LIMIT}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash.hex()}`,
    ).then(function (response) {
      return response.json();
    });

    // if (response.code !== 200) throw new Error('Erro ao exibir herois');
    return response.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }
}
