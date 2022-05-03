import iceCreamCake from '../../images/cake-custom-icecream.jpg';

const HomePage = () => {
  return (
    <section>
      <div className="left">
        <div className="top">
          <p>Everything I create is custom made</p>
          <h3>with care</h3>
          <p>from my home for you!</p>
        </div>
        <div className="bottom">
          <span className='image'>
            <img src={iceCreamCake} alt='A colorful cake with an ice cream cone on top' />
          </span>
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
};

export default HomePage;