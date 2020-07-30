import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

// Components
import CustomButton from '../CustomButton/CustomButton.component';

// Styles
import './ProductItem.styles.scss'

const ProductItem = ({item, addItem}) => {
    const { name, price, image, routeName } = item;

    return (
        <div className='product-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className='copy'>
                {name
                    ? <p>{name}</p>
                    : <p>Product Name</p>
                }
                {price
                    ? <p><strong>€{price}</strong></p>
                    : <p><strong>€20.00</strong></p>
                }
            </div>
            <CustomButton onClick={() => addItem(item)} >Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductItem)