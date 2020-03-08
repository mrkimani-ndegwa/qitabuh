import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Component
import BooksList from "./BooksList";

const dummyProps = {};

beforeAll(()=>{
    const props = {
        books: [],
        selectBook: ()=>{},
        selectDuration: ()=>{}
    };

    const propsAlt = {
        books: [{
            id: 'abcd',
            title: "Title",
            durationInDays: 0,
            isSelected: false,
            category: ""
        }],

        selectBook: ()=>{},
        selectDuration: ()=>{}
    };

    dummyProps.props = props;
    dummyProps.propsAlt = propsAlt;
    return dummyProps;
});

test('Should render correctly when all props are passed.', () => {
    const { props, propsAlt } = dummyProps;
    const tree = renderer.create(<BooksList {...props} />).toJSON();
    const treeAlt = renderer.create(<BooksList {...propsAlt} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(treeAlt).toMatchSnapshot();
});

test('Should render null when there are no items', () => {
    const { props } = dummyProps;
    const wrapper = shallow(<BooksList {...props}/>);
    expect(wrapper.type()).toEqual(null);
});
