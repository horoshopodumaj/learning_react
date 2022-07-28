import styles from './button.module.css';

import {ReactComponent as MinusIcon} from '../../icons/minus.svg';
import {ReactComponent as PlusIcon} from '../../icons/plus.svg';


const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
};

const Button = ({icon, ...props}) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} {...props}>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;