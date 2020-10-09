import React from 'react';
import { render, screen } from '@testing-library/react';

import Test from './Test';

describe('Test', () => {
    test('renders Test component', () => {
        render(<Test />);
        expect(screen.getByText('Test works!')).not.toBe(null);
    });
});
