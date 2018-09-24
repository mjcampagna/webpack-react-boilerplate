import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Form from '.';

describe('<Form />', () => {

	it('Form\'s Submit button is an INPUT', () => {
		const { getByValue } = render(<Form />);
		const submitButton = getByValue('Submit');

		expect(submitButton.tagName).toBe('INPUT');
	});

});
