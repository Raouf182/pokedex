import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Pokemon = ({pokemon}) => {
    return <>
        <Card className={"col-3"}>
            
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                   
                    {pokemon.url}
                </Card.Text>
                <Link to={"/Pokemon"} state={pokemon}><Button variant="info">Voir plus sur</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default Pokemon;