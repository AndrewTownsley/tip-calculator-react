import React from "react";
import  ReactDOM  from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Header from "../components/Header";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
    ReactDOM.unmountComponentAtNode(div)
})
