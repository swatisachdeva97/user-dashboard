import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('<App>', ()=> {

  it('renders learn react link', () => {
    render(<App />);
  });

  it('should contain App className', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists('.App')).toBe(true)
  });
});
