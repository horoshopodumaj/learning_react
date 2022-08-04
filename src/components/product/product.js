import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './product.module.css';

import Button from "../button";
import { useEffect } from 'react';

function Product({ product, amount, decrement, increment, fetchData }) {
    useEffect(() => {
        fetchData?.(product.id);
    }, []);

    return (
        <div className={styles.product} data-id='product'>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>{product.name}</h4>
                    <p className={styles.description}>{product.ingredients.join(', ')}</p>
                    <div className={styles.price}>{product.price} $</div>
                </div>
                <div>
                    <div className={styles.counter}>
                        <div className={styles.count} data-id='product-amount'>{amount}</div>
                        <div className={styles.buttons}>
                            <Button onClick={decrement} data-id='product-decrement' icon='minus' />
                            <Button onClick={increment} data-id='product-increment' icon='plus' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    amount: PropTypes.number,
    decrement: PropTypes.func,
    increment: PropTypes.func,
};

const mapStateProps = (state) => ({
    amount: state.order,
})
export default connect(mapStateProps)(Product)