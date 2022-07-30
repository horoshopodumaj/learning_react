import { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import styles from './menu.module.css'

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired,}).isRequired).isRequired,
  };
  
  render() {
    const {menu} = this.props;
    return (
      <div className={styles.menu}>
        <div>
          {menu.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default Menu;