import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../containers/App/App';

configure({ adapter: new Adapter() });
describe('<App>', () => {
  it('renders the container', () => {
    const app = shallow(<App />);
    expect(app).not.toBeNull();
    expect(app).toBeDefined();
  });

  it('triggers the rain cloud upon button click', () => {
    const spy = jest.spyOn(performance, 'now');
    const app = shallow(<App />);
    app.find('button#rain').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
