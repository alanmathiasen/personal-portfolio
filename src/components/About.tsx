import { FormattedMessage } from 'react-intl';

const About = () => (
  <div className="mb-10">
    <div id="about" className="h-1 mb-20"></div>

    <h2 className="text-4xl text-left mb-2">
      <FormattedMessage id="about.title" />
    </h2>
    <p className="text-xl">
      <FormattedMessage id="about.description" />
    </p>
  </div>
);

export default About;
