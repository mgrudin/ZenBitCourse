import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const data = [
    {
        id: 1,
        name: 'книга',
        image: 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg',
        quantity: 2,
        price: 1
    },
    {
        id: 2,
        name: 'игрушка',
        image: 'https://www.ikea.com/sg/en/images/products/fabler-bjoern-soft-toy__0710165_PE727396_S5.JPG?f=s',
        quantity: 1,
        price: 2
    }
];

export const Cart = (props) => {
    const [current, handleClick] = useState('cart');
    const onHandleClick = (e) => {
        handleClick(e.key);
    };

    const [cart, changeCart] = useState(data);
    const onChangeCart = (id, operation) => {
        const newCart = cart.slice(0);
        let newQuantity = newCart[id - 1].quantity;

        if (operation === 'delete') {
            newCart.splice(id - 1, id);
        } else if (operation === 'subtract') {
            newQuantity = newQuantity > 1 ? newQuantity - 1 : newQuantity;
            newCart[id - 1].quantity = newQuantity;
        } else {
            newQuantity = newQuantity > 0 ? newQuantity + 1 : newQuantity;
            newCart[id - 1].quantity = newQuantity;
        }

        changeCart(newCart);
    };
  

    const renderPurchase = (item) => (
        <div style={styles.purchase}>
            <div>
                <img src={item.image} alt={item.name} style={styles.purchaseImage}/>
                <span style={styles.purchaseTitle}>{item.name}</span>
            </div>
            <div style={styles.purchaseRightBlock}>
                <span style={styles.purchasePrice}>Цена: {item.price}</span>
                <button style={styles.purchaseButton} onClick={() => onChangeCart(item.id, 'subtract')}>-</button>
                <div style={styles.purchaseQuantity}>{item.quantity}</div>
                <button style={styles.purchaseButton} onClick={() => onChangeCart(item.id, 'add')}>+</button>
                <button style={styles.deleteButton} onClick={() => onChangeCart(item.id, 'delete')}>X</button>
            </div>
        </div>
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
            <Content style={styles.content}>
                { cart.map(purchase => renderPurchase(purchase)) }
                <div style={styles.toPay}><b>Всего к оплате:</b> {
                    cart.reduce((acc, item) => {
                        return acc + item.quantity * item.price;
                    }, 0)
                }</div>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

const styles = {
    layoutStyle: {
        minHeight: '100vh'
    },
    content: {
        width: 960,
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column'
    },
    purchase: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: '20px',
        padding: '0 10px'
    },
    purchaseImage: {
        width: 60, 
        height: 60,
        borderRadius: '50%'
    },
    purchaseTitle: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    purchaseRightBlock: {
        display: 'flex',
        alignItems: 'center'
    },
    purchasePrice: {
        paddingRight: '10px'
    },
    purchaseQuantity: {
        borderBottom: '1px solid black',
        margin: '0 20px',
        width: 20,
        textAlign: 'center'
    },
    purchaseButton: {
        width: 30,
        height: 30
    },
    deleteButton: {
        background: 'none',
        border: 'none',
        marginLeft: '20px',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    toPay: {
        backgroundColor: 'white',
        borderRadius: '8px',
        alignSelf: 'flex-end',
        padding: '20px'
    }
};