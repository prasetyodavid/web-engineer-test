import Home from '../pages/index';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, configure } from '@testing-library/react';
import UsersTableClientSide from '../component/table/UsersTableClientSide';

describe('Table', () => {
  it('should be rendered in the table', () => {
    const textToFind = 'Registered Date';

    render(<UsersTableClientSide />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});

test('Filter function lowercase', () => {
  const email = 'david@gmail.com';
  const filterText = 'dAVid@Gmail.com';
  expect(email.toLowerCase().includes(filterText.toLowerCase())).toBe(true);
});

test('Filter function if user input space', () => {
  const email = 'david@gmail.com';
  const filterText = ' dAVid@Gmail.com  ';
  expect(email.toLowerCase().includes(filterText.toLowerCase())).toBe(true);
});
