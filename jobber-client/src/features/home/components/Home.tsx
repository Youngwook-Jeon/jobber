import { FC, ReactElement } from 'react';

import FeaturedExperts from './FeaturedExperts';
import HomeGigsView from './HomeGigsView';
import HomeSlider from './HomeSlider';

const Home: FC = (): ReactElement => {
  return (
    <div className="m-auto px-6 w-screen relative min-h-screen xl:container md:px-12 lg:px-6">
      <HomeSlider />
      {/* {topGigs.length > 0 && (
        <TopGigsView
          gigs={topGigs}
          title="Top rated services in"
          subTitle={`Highest rated talents for all your ${lowerCase(topGigs[0].categories)} needs.`}
          category={topGigs[0].categories}
          width="w-72"
          type="home"
        />
      )}
      {categoryGigs.length > 0 && (
        <HomeGigsView gigs={categoryGigs} title="Because you viewed a gig on" subTitle="" category={categoryGigs[0].categories} />
      )}
      <FeaturedExperts sellers={sellers} /> */}
      <HomeGigsView gigs={[]} title="Because you viewed a gig on" subTitle="" category="Programming & Tech" />
      <FeaturedExperts sellers={[]} />
    </div>
  );
};

export default Home;
