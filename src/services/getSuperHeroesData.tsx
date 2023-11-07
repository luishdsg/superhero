import axios from 'axios';
import {SuperHeroInterface} from '../interface/superhero-interface';


export const SuperHeroesData = async (): Promise<SuperHeroInterface[]> => {
  try {
    // infelizmente troqueia  API pois a outra estava dando algusn erros
    // http://homologacao3.azapfy.com.br/api/ps/metahumans
    const response = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
