import {Fragment} from "react";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals of The Day! </h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="delicious food"/>
        </div>
    </Fragment>
};

export default Header;