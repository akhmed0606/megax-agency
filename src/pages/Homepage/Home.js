import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Info,Pricing,Footer } from '../../components';

function Home() {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Info {...homeObjFour} />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;