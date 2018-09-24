import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Form from '../src/Utilities/Form';

describe('<Form />', () => {

	it('Debug Component', () => {
		const wrapper = render( <Form /> );
		wrapper.debug();
	});

});
