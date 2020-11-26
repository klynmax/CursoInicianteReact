import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmentos from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';

export default _ => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"/>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1}max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F" >
                <Fragmentos/>
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Klynsman"
                    nota={10}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro/>
            </Card>

        </div>
    </div>
);
