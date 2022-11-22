// strict mode -> como ficam todos os exports

// Named exports
export let cores = [];
export function getName() {}
export class Animais {}

// Lista de exports
export { cores, getName, Animais}

// Exportação padrão -> 1 por arquivo
export default function getCars() {
   return <h1>Oi</h1>;
}
 
