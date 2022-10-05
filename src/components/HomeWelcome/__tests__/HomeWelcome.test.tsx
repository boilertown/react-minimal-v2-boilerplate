import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { HomeWelcome } from '../index';

describe('HomeWelcome', () => {
	test('Should render HomeWelcome without crashing', () => {
		render(<HomeWelcome />);

		expect(screen.getByRole('heading')).toHaveTextContent(
			'Welcome to Boilertowns',
		);
	});
});
