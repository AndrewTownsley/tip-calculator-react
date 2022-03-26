import React from "react";
import  ReactDOM  from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import BillInput from '../components/BillInput'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BillInput/>, div);
    ReactDOM.unmountComponentAtNode(div)
})
