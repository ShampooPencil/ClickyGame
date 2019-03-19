//setup the characters and made them into imgages into divs so they 
//can have <div> id's
//So tonight work on 1.show the pics to the site
//                   2. figure out some logic (bit by bit)
//                   3. and just set it up for tomorrow.
//                   4. everytime we do a click we have to randomize the cards '
//                   figure out why i cant click on the first div (it works on the id and src but not the onClick )
import React from 'react';
import OnClickHandler from './clickedImage'; //****** we will use this soon just puutting the pics up for now

export class Store extends React.Component {
    constructor( props ) {
        super( props );

        // since you're using this method in a callback, don't forget to
        // bind the this context
        this.clickChar = this.clickChar.bind( this );
    }
    //we are going to pass the id inside the function
    clickChar(id) {


        console.log(id);

    }
  
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState(({ count }) => ({
        count: count + 1
    }));
        
    console.log(this.count);
    };
    


    render() {


        let charArr = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8"];
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

        //let nameOfChars = ["Dennis", "Charlie", "Mac", "Dee", "Charlies Uncle", "Frank", "McPoyles", "Rickitty Cricket"];
        return (

            <div className="container">

               
                <div onClick={() => this.setState({ counter: this.state.counter + 1})}>{this.state.count}>                                               
                    <OnClickHandler id={charArr[0]} src={linkToPic[0]}/> {/*onClick={() => this.clickChar(charArr[0])}*/}  
                </div> 
                <div>
                    <OnClickHandler id={charArr[1]} src={linkToPic[1]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[2]} src={linkToPic[2]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[3]} src={linkToPic[3]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[4]} src={linkToPic[4]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[5]} src={linkToPic[5]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[6]} src={linkToPic[6]} />
                </div>
                <div>
                    <OnClickHandler id={charArr[7]} src={linkToPic[7]} />
                </div>
                {/* <img src="http://1.bp.blogspot.com/-uQ16l5LzkHY/Vq-Uk-8xN1I/AAAAAAAAAbQ/CII-xso3_YQ/s1600/maxresdefault.jpg" alt="Dennis" />  */}
                {/* <h2>Dennis</h2>
                {/* </div>  */}
                {/*<div id={charArr[1]} onClick={this.clickChar}>
                    <img src="https://m.media-amazon.com/images/M/MV5BMDMwOTU4MTEtODIzZi00YTZiLWEwYzMtODg3OGEwMWVlNDEwXkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_UY268_CR120,0,182,268_AL_.jpg" alt="charlie" />
                    <h2>Charlie</h2>
                </div>
                <div id={charArr[2]} onClick={this.clickChar}>
                    <img src="http://i.imgur.com/CLip3pb.png" alt="Mac" />
                    <h2>Mac</h2>
                </div>
                <div id={charArr[3]} onClick={this.clickChar}>
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-10/8/12/enhanced/webdr05/original-grid-image-20793-1412787106-5.jpg?crop=522:522;0,11&downsize=300:*&output-format=auto&output-quality=auto" alt="dee" />
                    <h2>Dee</h2>
                </div>
                <div id={charArr[4]} onClick={this.clickChar}>
                    <img src="https://vignette.wikia.nocookie.net/itsalwayssunny/images/a/a7/Jack_Kelly.png/revision/latest?cb=20110818064249" alt="CharliesUncle" />
                    <h2>Charlie's Uncle</h2>
                </div>
                <div id={charArr[5]} onClick={this.clickChar}>
                    <img src="https://cbsnews1.cbsistatic.com/hub/i/r/2017/03/25/3dbfdf2a-83da-4886-ac11-6fab9a52729b/thumbnail/640x464/83ea98f739a4391f712ebc7fdf6ac24a/danny-devito-its-always-sunny-in-philadelphia-244.jpg" alt="Frank" />
                    <h2>Frank</h2>
                </div>
                <div id={charArr[6]} onClick={this.clickChar}>
                    <img src="http://farm3.static.flickr.com/2351/1992927137_5243b955ef.jpg" alt="McPoyles" />
                    <h2>McPoyles</h2>
                </div>
                <div id={charArr[7]} onClick={this.clickChar}>
                    <img src="http://i.imgur.com/lRhgBqv.png" alt="Cricket" />
                    <h2>Rickitty Cricket</h2>
                </div> */}

            </div>
        )
    }
}
