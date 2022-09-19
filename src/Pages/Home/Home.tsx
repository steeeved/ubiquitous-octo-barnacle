import video from './rain.mp4';
import Styles from './Home.module.scss';

export const Home = () => {
  console.log('Home page rendered');

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

  return (
    <div className={Styles.main}>
      <div className={Styles.greeting}>
        <h1>{greeting()}</h1>
        <p>
          {day}, {dayOfMonth} {month} {year}
        </p>
      </div>
      <div className={Styles.video}>
        <video src={video} autoPlay loop muted />
      </div>
    </div>
  );
};

export default Home;
