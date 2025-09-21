
/**
 * Obtener el valor de una carta
 * @param {String} cartRequest  Ejemplo: 'KS' 
 * @returns {Number} retorna el valor de una carta, de tipo Number --Ejemplo 10
 */    

export  const valueCard = (cartRequest) => {
    let value = cartRequest.substring(0,cartRequest.length-1)
    return (isNaN(value)) ?
            (value === 'A') ? 11:10
            :value * 1;
}