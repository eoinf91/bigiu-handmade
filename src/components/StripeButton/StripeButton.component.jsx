import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxBHQBlqnMhhZ6KgfyJn6J0tschByBPAD3VqPdLjnzGsHRGUXlRstchlQbd2I6T7TbalgnXQwNAOWwSSCUKeA9M00cUOzi1P3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

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