import _ from 'underscore';

// JSDoc Comments -> Documentacion
/**
 * Funcion que crea un nuevo deck
 * @param {Array<String>} cartTypes    Ejemplo: ['C','D','H','S']
 * @param {Array<String>} specialTypes Ejemplo: ['J','Q','K','A']   
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */


// puede ser -> export default createDeck;
export const createDeck = (cartTypes, specialTypes) => {

    // !cartTypes = 'undefined'
    if(!cartTypes || cartTypes.length === 0) 
        throw new Error(`cartTypes es obligatorio como un arreglo de string.`);   
    if(!specialTypes || specialTypes.length === 0) 
        throw new Error(`specialTypes es obligatorio como un arreglo de string.`);   

    let deck = [];
    for(let i = 2; i<=10;i++){
        for(let type of cartTypes){
            deck.push(i + type);
        }
    }
    for(let type of cartTypes){
        for(let special of specialTypes){
            deck.push(special + type);
        }
    }
    return _.shuffle(deck);
}