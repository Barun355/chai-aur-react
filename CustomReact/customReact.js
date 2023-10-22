

function customRender(customReactElement, customReactRoot){
    // Inital Algorthim for rendering HTML element in custom react library
    /*
    const element = document.createElement(customReactElement.type)
    element.innerHTML = customReactElement.children;

    element.setAttribute("href", customReactElement.props.href)
    element.setAttribute("target", customReactElement.props.target)

    customReactRoot.appendChild(element)
    */

    // Advance version of Initial Algorthim
    const element = document.createElement(customReactElement.type)
    element.innerHTML = customReactElement.children;

    for (const prop in customReactElement.props) {
        element.setAttribute(prop, customReactElement.props[prop])
    }

    customReactRoot.appendChild(element)
}

const customReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}



const customReactRoot = document.getElementById('root')




customRender(customReactElement, customReactRoot)