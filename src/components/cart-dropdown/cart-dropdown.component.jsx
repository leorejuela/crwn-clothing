import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const cartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>GoToCheckout</Button>
        </div>
    );
};

export default cartDropdown;