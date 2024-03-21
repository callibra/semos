import React from 'react';
import PropTypes from 'prop-types';

export const Car = ({vozila}) => {
    console.log(vozila)
    return(
        <div id="car">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Naselba</th>
                        <th>Ulica</th>
                        <th>Oznaka</th>
                    </tr>
                </thead>
                <tbody>
                    {vozila.map((kola,i)=>{
                        return(
                            <tr key={i}>
                                <td>{kola.brand}</td>
                                <td>{kola.model}</td>
                                <td>{kola.year}</td>
                                <td>{kola.plates.grad.naselba}</td>
                                <td>{kola.plates.grad.ulica}</td>
                                <td>{kola.plates.oznaka}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Car.propTypes = {
 vozila: PropTypes.arrayOf(PropTypes.object).isRequired
}