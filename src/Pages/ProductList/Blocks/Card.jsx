import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

const { Meta } = CardComponent;

export const Card = ({ el }) => {
    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => {
        changeFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ height: 240 }} />}
                onClick={ onChangeFlipped }
            >
                <Link to="/details"><Meta title={el.name} /></Link>
            </CardComponent>
    
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ height: 240 }} />}
                onClick={ onChangeFlipped }
            >
                <Link to="/details"><Meta title='back side' /></Link>
            </CardComponent>
        </ReactCardFlip>
    );
}
