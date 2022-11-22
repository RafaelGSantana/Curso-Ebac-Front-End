// import { Animais, cores, getName } from "./modulesExport";
import Cachorro from './classes.js'; // Como a exportação da class Animal é default, eu posso importar com qualquer nome.

const cachorro = new Cachorro('cachorro');
cachorro.falar();
cachorro.comer();
