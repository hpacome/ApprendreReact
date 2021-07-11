import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {

    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }

    render(){
        return (
            <div>
                 <h1>{this.props.titre}</h1>

                 <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consecteur adipiscing elit</p>

                 <Car color="Red">Ford</Car>
                 <Car>Mercedes</Car>
                 <Car color="green"></Car>
            </div>
        )
    }
}

export default Mycars;