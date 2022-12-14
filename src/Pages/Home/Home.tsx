import video from './rain.mp4';
import Styles from './Home.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';

import {useState } from 'react';

// create an interface for the isError prop and setIsError function
interface IHomeProps {
  isError: boolean;
  setIsError: (isError: boolean) => void;
}

export const Home = (props: IHomeProps) => {
  const { isError, setIsError } = props;
  const [showError, setShowError] = useState<boolean>(true);

  const errorClasses = classNames({
    [Styles.error]: showError === true,
    [Styles.noError]: showError === false
  })

  const greeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return `Good Morning`;
    }
    if (hours >= 12 && hours <= 17) {
      return `Good Afternoon`;
    }
    if (hours > 17 && hours <= 20) {
      return `Good Evening`;
    }
    if (hours > 20) {
      return `Good Night`;
    }
  };

  const date = new Date();
  const day = date.toLocaleString('default', { weekday: 'long' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  function toggleClose() {
    setShowError(false);
    console.log('clicked');
  }

  return (
    <div className={Styles.mainG}>
      <div className={Styles.greeting}>
        <h1>{greeting()}</h1>
        <p>
          {day}, {dayOfMonth} {month} {year}
        </p>
      </div>

      <div className={errorClasses}>
        <div className={Styles.close} onMouseDown={toggleClose}>
          <CloseIcon />
        </div>
        <div className={Styles.info}>
          <p>
            Oops! Something went wrong.
            <span>
              To use this app, please enable location services in your browser
              and refresh the page.
            </span>
          </p>
        </div>
      </div>

      <div className={Styles.video}>
        <video src={video} autoPlay loop muted />
      </div>
    </div>
  );
};

export default Home;
