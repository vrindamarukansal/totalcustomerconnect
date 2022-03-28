import { render, screen } from '@testing-library/react';
import Landing from '../../routes/landing';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from '../../store/store';

test('renders search record form', () => {
  render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route index element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>);
  const element = screen.getByTestId('search-record-form');
  expect(element).toBeInTheDocument();
});