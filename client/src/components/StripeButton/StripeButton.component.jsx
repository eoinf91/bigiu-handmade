import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxBHQBlqnMhhZ6KgfyJn6J0tschByBPAD3VqPdLjnzGsHRGUXlRstchlQbd2I6T7TbalgnXQwNAOWwSSCUKeA9M00cUOzi1P3';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
        .then(response => {
            alert('succesful payment');
        })
        .catch(error => {
            console.log('Payment Error: ', error);
            alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
        };

    return(
        <StripeCheckout
            currency="EUR"
            label="Pay Now"
            name="BiGiu Handmade"
            billingAddress
            shippingAddress
            image=''
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton