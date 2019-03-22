import React from "react";
import countingClicks from "./countingComp";
//import StoreChars from "./storeChars";

//well, this is the logic. We will use the onClick to use the react. 
//if the click clicked on the same pic twice, them tell the user something and restart
//the page/game. ex if(id1 === 2){ then "You clicked {id1} again! GAME OVER"}
//so..if an user clicked over 6 times, than you won the game!. so like const won = 6;
//let charName;
function OnClickHandler(props) {


    return (

        <div id={props.id} onClick={() => props.clickChar(props.id)}>

            <img src={props.src} alt="Pic" />
            <h2>{props.id}</h2>
           
        </div>
    )
}

export default OnClickHandler;
// class is smart functionlly is dumb lawlz
