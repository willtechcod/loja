import React, {useContext} from 'react';
import { Context} from '../../Context/AuthContext'

function Dashbord() {

    const { handleLogout } = useContext(Context);

    return (
        <div className="dashbord">
    
                <h1>Bem vido ao Administrativo</h1>
                <button type="button" onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Dashbord;