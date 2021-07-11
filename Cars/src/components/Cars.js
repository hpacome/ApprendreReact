import React from 'react';

const Car = ({nom, color, year}) => {

    const colorInfo = color ? (<p>couleur: { color }</p>) : (<p>Couleur: Neant</p>);

    if(nom){
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin:'5px auto'} }>
                <p>Marque: { nom }</p>
                <p>Age: { year }</p>
                { colorInfo }
            </div>
        )
    } else {
        return null
    }

}

export default Car;