import Heading from '../../atoms/heading/Heading';
import iceCreamCake from '../../images/cake-custom-icecream.jpg';
import Paragraph from '../../atoms/paragraph/Paragraph';

const HomePage = () => {
  return (
    <section>
      <Paragraph>Everything from</Paragraph>
      <Heading level='2'>Stacy's Cakes</Heading>
      <Paragraph>is custom made, with care, from my home for you!</Paragraph>
    </section>
  );
};

export default HomePage;