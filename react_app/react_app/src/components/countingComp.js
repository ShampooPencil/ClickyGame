import React from 'react';

function CountingClicks(props){
    props.state = {
        count: 0
    };
    
    props.handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
        this.shuffle();
        console.log(this.state.count);
    };
  
    return (
        <div>
            {props.handleClick()}
        </div>
        
        )
    }

export default CountingClicks;