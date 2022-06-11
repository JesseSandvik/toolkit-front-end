import Button from '../../atoms/button/Button';
import Heading from '../../atoms/heading/Heading';
import Paragraph from '../../atoms/paragraph/Paragraph';

const HomePage = () => {
  return (
    <section>
      <Paragraph>Everything from</Paragraph>
      <Heading level='2'>Stacy's Cakes</Heading>
      <Paragraph>is custom made</Paragraph>
      <Heading level='2'>with care</Heading>
      <Paragraph>fresh from my kitchen for you!</Paragraph>
      <div>
      <Button>see what's on the menu!</Button>
      </div>
    </section>
  );
};

export default HomePage;