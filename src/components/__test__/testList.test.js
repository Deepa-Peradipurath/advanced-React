import React from 'react';
import ReactDOM from 'react-dom';
import TestList from './../testList';

it('render without crashing', () => {
    const div = document.createElement('div');
    const props = {
        data :[
            {
                "API": "Materials Platform for Data Science",
                "Description": "Curated experimental data for materials science",
                "Auth": "apiKey",
                "HTTPS": true,
                "Cors": "no",
                "Link": "https://mpds.io",
                "Category": "Science & Math"
            }
        ]};
    ReactDOM.render(<TestList {...props}/>,div);
    ReactDOM.unmountComponentAtNode(div);
});