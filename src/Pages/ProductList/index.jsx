import React, { useState } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { Card } from './Blocks/Card';
import { Link } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const data = [
    {
        id: 1,
        name: 'книга',
        image: 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'
    },
    {
        id: 2,
        name: 'игрушка',
        image: 'https://www.ikea.com/sg/en/images/products/fabler-bjoern-soft-toy__0710165_PE727396_S5.JPG?f=s'
    },
    {
        id: 3,
        name: 'коробка',
        image: 'https://image.freepik.com/free-psd/_35913-1372.jpg'
    },
    {
        id: 4,
        name: 'чашка',
        image: 'https://images.ua.prom.st/855927738_chashka-kvin.jpg'
    }
];

export const ProductList = (props) => {
    const [current, handleClick] = useState('shop');
    const onHandleClick = (e) => {
        handleClick(e.key);
    };

    const renderCards = (element) => (
        <Col span={4}>
            <Card el={element} />
        </Col>
    );

    return (
        <Layout style={styles.layoutStyle}>
            <Header>
                <Menu onClick={onHandleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="shop">
                    <Link to="/">Shop</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                    <Link to="/cart">Cart</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{marginTop: 10}}>
                <Row justify="space-around">
                    { data.map(item => renderCards(item)) }
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

const styles = {
    layoutStyle: {
        minHeight: '100vh'
    }
};