const INITIAL_STATE = {
    collections: [
        {
            title: 'Earrings',
            id: 1,
            linkUrl: 'shop/earrings',
            image: '/assets/product_images/red_pendant_earrings_in_tating.jpg',
        },
        {
            title: 'Necklaces',
            id: 2,
            linkUrl: 'shop/necklaces',
            image: '/assets/product_images/red_lace_tatting_necklace.jpg',
        },
        {
            title: 'Chokers',
            id: 3,
            linkUrl: 'shop/chokers',
            image: '/assets/product_images/black_choker_black_bronze_drops_tatting.jpg',
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer