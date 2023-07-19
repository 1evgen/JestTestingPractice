import React from 'react';
import { ExampleComponent } from './ExampleComponent';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

let container: HTMLDivElement | null = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

test('renders with or without a name', () => {
    const isName: string = "Artur"
    const {getByText} = render(
        <ExampleComponent name={isName}/>
    )
    expect(getByText(`Hello ${isName}`)).toBeTruthy()

    act(()=>{
        render(<ExampleComponent name={"John"}/>, {container: container as Element});
    })
        expect((container?.textContent)).toBe("Hello John")

    act(() => {
        render(<ExampleComponent name={''} />, { container: container as Element });
    });
    expect(container?.textContent).toBe('Hey stranger');


});
