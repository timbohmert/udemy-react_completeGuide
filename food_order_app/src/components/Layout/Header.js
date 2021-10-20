import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div>
        <img
          src={mealsImage}
          alt="A table full of delicious food"
          className={classes['main-image']}
        />
      </div>
    </Fragment>
  );
};

export default Header;
