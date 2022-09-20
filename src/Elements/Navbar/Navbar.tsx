import Styles from './Navbar.module.scss';

//set up interface for isError prop
interface INavbarProps {
  isError: boolean;
}

const Navbar = (props: INavbarProps) => {
  const { isError } = props;
  const barMSG = isError ? 'Error' : 'CurrentWeather';
  return (
    <nav className={Styles}>
      <h1>{barMSG}</h1>
    </nav>
  );
};

export default Navbar;
