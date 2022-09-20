import Styles from './Navbar.module.scss';
import classNames from 'classnames';

//set up interface for isError prop
interface INavbarProps {
  isError: boolean;
}

const Navbar = (props: INavbarProps) => {
  const { isError } = props;
  const barMSG = isError ? 'Error' : 'CurrentWeather';
  //set the color h1 to red if isError is true
  const barColor = classNames({
    [Styles.barColor]: isError === true
  });

  return (
    <nav className={Styles}>
      <h1 className={barColor}>{barMSG}</h1>
    </nav>
  );
};

export default Navbar;
