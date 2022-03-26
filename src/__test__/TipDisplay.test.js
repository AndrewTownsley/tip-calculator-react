import React from "react";
import  ReactDOM  from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import TipDisplay from "../components/TipDisplay";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TipDisplay/>, div);
    ReactDOM.unmountComponentAtNode(div)
})
