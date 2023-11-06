import axios from 'axios';
import {SuperHeroInterface} from '../interface/superhero-interface';


export const SuperHeroesData = async (): Promise<SuperHeroInterface[]> => {
  try {
    const response = await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans');
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
