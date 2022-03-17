import { render, screen } from '@testing-library/react';
import { Provider } from "mobx-react";
import userEvent from "@testing-library/user-event";
import { store } from "../store";
import Home from './Home';

describe('<Home/>', () => {
  it('renders the component', ()=>{
    render(<Provider store={store}>(<Home /></Provider>);
    const linkElement = screen.getByText(/Increment Counter/i);
    const counterDisplay =  screen.getByTestId('counter');
    const todoCountDisplay =  screen.getByTestId('to-do-count')
    
    expect(linkElement).toBeInTheDocument();
    expect(todoCountDisplay).toHaveTextContent(/ToDo length: 3/i);
    expect(counterDisplay).toHaveTextContent(/Counter: 0/i);
  });
  it('increments counter', ()=>{
    render(<Provider store={store}>(<Home /></Provider>);
    const buttonEl = screen.getByTestId('counter-submit');
    const display =  screen.getByTestId('counter')
    userEvent.click(buttonEl);
    expect(display).toHaveTextContent(/Counter: 1/i);
  });
  it('adds todo', ()=>{
    render(<Provider store={store}>(<Home /></Provider>);
    const buttonEl = screen.getByTestId('to-do-submit');
    const display =  screen.getByTestId('to-do-count')
    userEvent.click(buttonEl);
    expect(display).toHaveTextContent(/ToDo length: 4/i);
  });

});