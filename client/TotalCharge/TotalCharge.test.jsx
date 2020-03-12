import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Component
import TotalCharge from "./TotalCharge";

const dummyProps = {}

beforeAll(()=>{
    const props = {
        selectedBooks:[]
    };

    const propsAlt = {
        selectedBooks: [{
            id: 'abcd',
            title: "Title",
            durationInDays: 0,
            isSelected: false,
            category: ""
        }]
    };

    dummyProps.props = props;
    dummyProps.propsAlt = propsAlt;
    return dummyProps;
});

test('Should render correctly when all props are passed.', () => {
    const { props, propsAlt } = dummyProps;
    const tree = renderer.create(<TotalCharge {...props} />).toJSON();
    const treeAlt = renderer.create(<TotalCharge {...propsAlt} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(treeAlt).toMatchSnapshot();
});

test('Should render null when there are no items', () => {
    const { props } = dummyProps;
    const wrapper = shallow(<TotalCharge {...props}/>);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.containsMatchingElement('<div className="no-selected">😢 No books selected.Please select a title and add a duration to preview cost.</div>'))
});
