import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Component
import Book from "./Book.jsx";

const dummyProps = {};

beforeAll(() => {
    const props = {
        id: 'abcd',
        title: "Title",
        selectBook: () => {},
        selectDuration: () => {},
        isSelected: true
    };
    
    const propsAlt = {
        id: 'efgh',
        title: "Title",
        selectBook: () => {},
        selectDuration: () => {},
        isSelected: false
    };

    dummyProps.props = props;
    dummyProps.propsAlt = propsAlt;
});

test('Should render correctly when there are no items', () => {
    const { props } = dummyProps;
    const tree = renderer.create(<Book {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Should render duration selection input if isSelected is true', () => {
    const { props, propsAlt } = dummyProps;
    const wrapper = shallow(<Book {...props}/>);
    const wrapperAlt = shallow(<Book {...propsAlt}/>);
    expect(wrapper.containsMatchingElement(<input className="duration-selection"/>)).toBe(true);
    expect(wrapperAlt.containsMatchingElement(<input className="duration-selection"/>)).toBe(false);
});
