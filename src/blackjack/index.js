
import _ from 'underscore';  
import { createDeck, requestCard, valueCard } from './usecasses/index.js';

const myModule = (() => {
    'use strict';  

    let deck            = [];
    const types         = ['C','D','H','S'],
        specials        = ['J','Q','K','A'];

    let playersPoints = [0,0];


    const btnRequest          = document.querySelector('#btnRequest'),
          btnNew              = document.querySelector('#btnNew'),
          btnStop             = document.querySelector('#btnStop');

    const divCartsPlayers     = document.querySelectorAll('.divCarts'),
          pointsHTML          = document.querySelectorAll('small');

    // Creamos el deck de manera global          
    deck = createDeck(types,specials); 

    const initGame = (numPlayers = 2) => {

        playersPoints = [];
        for(let i = 0; i<numPlayers;i++){
            playersPoints.push(0);
        }

        pointsHTML.forEach(elem => elem.innerText = 0);
        divCartsPlayers.forEach(elem => elem.innerHTML = '');

        btnStop.disabled = false;
        btnRequest.disabled = false; 

    }
    
    // requestCard(deck);
    // valueCard(value);
    
    const accumulatePoints = (cart, turn ) => {
        playersPoints[turn] =playersPoints[turn] + valueCard(cart);
        pointsHTML[turn].innerText = playersPoints[turn];
        return playersPoints[turn];
    }
 
    const createCartHTML = (cart, turn) => {
        const imgCart = document.createElement('img');
        imgCart.src = `assets/cartas/${cart}.png`               
        imgCart.classList.add("carta");    
        divCartsPlayers[turn].append(imgCart);    
    }

    
    const determineWinner = () => {

        const [minimumPoints, pointsComputer] = playersPoints;     
        
        setTimeout(() => {
            if(pointsComputer === minimumPoints){
                alert('Nadie gana');
            }else if(minimumPoints > 21){
                alert('Computadora gana');
            }else if(pointsComputer>21){
                alert('Jugador 1 gana');
            }else{
                alert('Computadora gana');
            }
        }, 100);
    }

    const computerTurn = (minimumPoints) => {
        let pointsComputer = 0;
        do{
            const cart = requestCard(deck);
            pointsComputer = accumulatePoints(cart,playersPoints.length - 1);
            createCartHTML(cart,playersPoints.length - 1);

        }while((pointsComputer < minimumPoints) && (minimumPoints <= 21));

        determineWinner();
    }
    
    // Eventos

    btnRequest.addEventListener('click', () =>{                 
        const cart = requestCard(deck);
        const pointsPlayer = accumulatePoints(cart, 0);
        
        createCartHTML(cart, 0 );
    
        if(pointsPlayer>21){
            btnRequest.disabled = true;
            btnStop.disabled = true;    
            computerTurn(pointsPlayer);
        }else if (pointsPlayer === 21){
            btnRequest.disabled = true;
            btnStop.disabled = true;
            computerTurn(pointsPlayer);
        }
    })                

    btnStop.addEventListener('click',() =>{
        btnStop.disabled = true;
        btnRequest.disabled = true; 
        computerTurn(playersPoints[0]);
    })

    
    btnNew.addEventListener('click',() =>{
        
        initGame();

    });    
    
    return {
        newGame : initGame
    };

})();






















































































































































































































































