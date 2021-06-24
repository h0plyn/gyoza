import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
  afterEach(cleanup);

  const setup = () => {
    const utils = render(<Header />);
    return { ...utils };
  };

  it('should render the Header component without crashing', () => {
    render(<Header />);
  });

  it('matches the snapshot of Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an 🥟 emoji icon and title', () => {
    const { getByText } = setup();
    expect(getByText('🥟')).toBeInTheDocument();
    expect(getByText('gyoza')).toBeInTheDocument();
  });
});
