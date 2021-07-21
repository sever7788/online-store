import airImage from '../assets/air.png';
import mavicImage from '../assets/mavic.png';
import matriceImage from '../assets/matrice.png';

const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';

let initialState = {
    productName: "Quadrojoy",
    products: [
        {
            photo: airImage,
            name: "DJI Air 2S",
            price: 1424,
            rating: 4.2,
            speed: 9,
            id: 1,
        },
        {
            photo: mavicImage,
            name: "DJI Mavic Mini",
            price: 990.90,
            rating: 4.5,
            speed: 7,
            id: 2,
        },
        {
            photo: matriceImage,
            name: "DJI's Matrice 200",
            price: 2780.30,
            rating: 3.8,
            speed: 12,
            id: 3,
        }
    ],
    selectedFilter: "All",
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_FILTER:
            return {
                ...state,
                selectedFilter: action.selectedFilter
            }

        default:
            return state;
    }
}

export const setSelectedFilter = (selectedFilter) => ({ type: SET_SELECTED_FILTER, selectedFilter });

export default mainReducer;