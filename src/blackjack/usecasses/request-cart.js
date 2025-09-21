
/**
 * Funcion para pedir una carta del 'deck' ya creado
 * @param {Array<String>} deck   Ejemplo: ['2C','10D','4H','KS']
 * @returns {String}    retorna una carta, de tipo String --Ejemplo: 'KS'
 */

export const requestCard = (deck) => {
    
    if(!deck || deck.length === 0) 
        throw new Error(`deck es obligatorio como un arreglo de string y no puede estar vacio.`);   

    return deck.pop();
}