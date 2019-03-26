//setup the characters and made them into imgages into divs so they 
//can have <div> id's
//So tonight work on 1.show the pics to the site
//                   2. figure out some logic (bit by bit)
//                   3. and just set it up for tomorrow.
//                   4. everytime we do a click we have to randomize the cards '
//                   figure out why i cant click on the first div (it works on the id and src but not the onClick )
import React from 'react';
import OnClickHandler from './clickedImage'; //****** we will use this soon just puutting the pics up for now

//import ReactDOM from 'react-dom';


export class Store extends React.Component {
    constructor(props) {
        super(props);
        // since you're using this method in a callback, don't forget to
        // bind the this context
        this.clickChar = this.clickChar.bind(this);
        this.state = {
            count: 0,
            value: '',
            selectedChar: [],
            alreadyThere: ["Dennis", "Charlie", "Mac", "Dee", "Charlies-Uncle", "Frank", "McPoyles", "Cricket"],
            youWon: "You Win",
            youLose: ""

        };
    }

    //we are going to pass the id inside the function
    clickChar(id) {

        // console.log(id);
        // console.log(this.state.selectedChar);
        // console.log(this.state.compareChar);
      
            // this.setState({
            //     selectedChar: [...this.state.selectedChar, id]
            //     //compareChar: [...this.state.compareChar, id]
            // });
        
        // for (var i = 0; i < this.state.alreadyThere.length; i++) {
        //     //console.log(this.state.selectedChar);
        //     for (var j = 0; j < this.state.selectedChar.length; j++) {
        //         console.log(this.state.selectedChar[j]);
        //         console.log(this.state.selectedChar);
        //         if(this.state.selectedChar.length === 6) {
        //             console.log(this.state.youWon);
        //             this.setState({
        //                 selectedChar: []
        //             })
        //             console.log(this.state.selectedChar);
        //             break;
        //         }
        //         if (this.state.selectedChar[i] === this.state.selectedChar[j]) {
        //             console.log("GAMEOVER");
        //             this.setState({
        //                 selectedChar: [],
        //                 youLose: "GAME OVER!"
        //                 // compareChar: [...this.state.selectedChar, id],
        //             })
        //             console.log(this.state.selectedChar);
        //             break;
        //         }
        //     }
        //     if (this.state.selectedChar.length === 6) {
        //         console.log(this.state.youWon);
        //         this.setState({
        //             selectedChar: []
        //         })
        //         console.log(this.state.selectedChar);
    
        //     } else {

        //         // this.setState({
        //         //     selectedChar: [...this.state.selectedChar, id]
        //         //     //compareChar: [...this.state.compareChar, id]
        //         //});
        //         console.log(id);
        //         console.log(this.state.selectedChar);
        //         console.log(this.state.selectedChar.length);
        //         console.log(this.state.alreadyThere[i]);
            
        //     }
        //     if (this.state.selectedChar.length === 6) {
        //         console.log(this.state.youWon);
        //         this.setState({
        //             selectedChar: []
        //         })
        //         console.log(this.state.youWon);
        //         console.log(this.state.selectedChar);
        //     }


        // };
        if (this.state.selectedChar[id] === this.state.alreadyThere[id]) {
            console.log("GAMEOVER");
            console.log(this.state.selectedChar[id]);
            this.setState({
                selectedChar: [],
                youLose: "GAME OVER!"
                // compareChar: [...this.state.selectedChar, id],
            })
        }

        if (this.state.selectedChar.length === 6) {
            console.log(this.state.youWon);
            this.setState({
                selectedChar: []
            })
            console.log(this.state.youWon);
            console.log(this.state.selectedChar);
        } else {
            this.setState({
                selectedChar: [...this.state.selectedChar, id]
                //compareChar: [...this.state.compareChar, id]
            })
            console.log(id);
            //console.log(this.state.selectedChar);
            console.log(this.state.selectedChar.length);
        }
        console.log(this.state.selectedChar);
        //console.log(clickChar());

        console.log(this.state.compareChar);
    }



    // state = {
    //     count: 0,
    //     value: '',
    //     selectedChar: []
    // };

    // onChangeValue = event => {
    //     this.setState({ value: event.target.value });
    // };

    // onAddItem = () => {
    //     // not allowed AND not working
    //     this.setState(state => {
    //         const selectedChar = state.list.concat(state.value);
    //         console.log(selectedChar);
    //         return {
    //             selectedChar,
    //             value: '',
    //         };
    //     });
    // };

    // handleClick = (character) => {

    //     // eslint-disable-next-line no-restricted-globals
    //     // const filterChars = this.state.selectedChar.filter(character => {
    //         if (character === this.state.selectedChar[character]) {
    //             console.log(this.state.selectedChar[character]);
    //             // eslint-disable-next-line no-restricted-globals
    //             return alert("GAMEOVER") && location.reload();
    //             // eslint-disable-next-line no-restricted-globals
    //             //
    //         } else {
    //             return this.state.selectedChar.push(character);
    //         }

    // };
    /* // (character[id] === this.state.selectedChar[id]) ? alert("GAMEOVER", location.reload()) : this.state.selectedChar.push(character[id]) );}*/
    // this.setState(({ count }) => ({
    //     count: count + 1
    // }));
    // this.shuffle();

    // console.log(this.state.count);


    // shuffle() {

    //     //  let characters = Math.floor(Math.random() * this.props.charArr.length);
    //     //  console.log(this.charArr.length) ;               
    // }



    render() {




        let charArr = ["Dennis", "Charlie", "Mac", "Dee", "Charlies-Uncle", "Frank", "McPoyles", "Cricket"];
        let linkToPic = [
            "http://1.bp.blogspot.com/-uQ16l5LzkHY/Vq-Uk-8xN1I/AAAAAAAAAbQ/CII-xso3_YQ/s1600/maxresdefault.jpg", //Dennis
            "https://m.media-amazon.com/images/M/MV5BMDMwOTU4MTEtODIzZi00YTZiLWEwYzMtODg3OGEwMWVlNDEwXkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_UY268_CR120,0,182,268_AL_.jpg", //Charlie
            "http://i.imgur.com/CLip3pb.png", //Mac
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/8/12/enhanced/webdr05/original-grid-image-20793-1412787106-5.jpg?crop=522:522;0,11&downsize=300:*&output-format=auto&output-quality=auto", //Dee
            "https://vignette.wikia.nocookie.net/itsalwayssunny/images/a/a7/Jack_Kelly.png/revision/latest?cb=20110818064249", //Charlies Uncle
            "https://cbsnews1.cbsistatic.com/hub/i/r/2017/03/25/3dbfdf2a-83da-4886-ac11-6fab9a52729b/thumbnail/640x464/83ea98f739a4391f712ebc7fdf6ac24a/danny-devito-its-always-sunny-in-philadelphia-244.jpg", //Frank
            "http://farm3.static.flickr.com/2351/1992927137_5243b955ef.jpg", //McPoyles
            "http://i.imgur.com/lRhgBqv.png" //cricket
        ];

        return (

            <div className="container">


                <div onClick={this.handleClick} counter={this.state.count}> {/*clickcount={this.filter*/} {/*(this.state.count < 2) {? alert("Nice!") : alert("GAME OVER")*/}

                    <OnClickHandler id={charArr[0]} clickChar={this.clickChar} src={linkToPic[0]} />

                    <OnClickHandler id={charArr[1]} clickChar={this.clickChar} src={linkToPic[1]} />

                    <OnClickHandler id={charArr[2]} clickChar={this.clickChar} src={linkToPic[2]} />

                    <OnClickHandler id={charArr[3]} clickChar={this.clickChar} src={linkToPic[3]} />

                    <OnClickHandler id={charArr[4]} clickChar={this.clickChar} src={linkToPic[4]} />

                    <OnClickHandler id={charArr[5]} clickChar={this.clickChar} src={linkToPic[5]} />

                    <OnClickHandler id={charArr[6]} clickChar={this.clickChar} src={linkToPic[6]} />

                    <OnClickHandler id={charArr[7]} clickChar={this.clickChar} src={linkToPic[7]} />

                </div>
            </div>
        )
    }
}
