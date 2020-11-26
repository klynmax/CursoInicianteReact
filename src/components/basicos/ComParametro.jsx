import React from 'react';

export default function(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong> 
                tem nota 
                <strong> {props.nota} </strong>
                aluno foi
                <strong> { status }</strong>!
            </p>
        </div>
    );
}