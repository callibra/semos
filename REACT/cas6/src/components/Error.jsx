import {Link} from 'react-router-dom';
export const Error = () => {

    return(
        <div id="error">
            <h1>ERROR !!!</h1>
            <h2>Vrati <Link to='/'>Se</Link> Na Pocetna Strana</h2>
        </div>
    )
}