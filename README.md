# React Controlled vs. Uncontrolled Components

![Cover image for The subtle difference between controlled and uncontrolled inputs in React](https://res.cloudinary.com/practicaldev/image/fetch/s--dzigYd3W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yqqyaq37tbo5n6fhqs7f.jpg)

### _React makes it easy to manipulate data using forms._

One of the most common patterns you'll see in React when dealing with _forms_ is that we need to make React aware of changes to the form inputs when the user types. This means that the component containing those input elements typically needs to keep track of the text in the input elements using state.

React supports two types of components: **controlled components** and **uncontrolled components**. Let’s uncover the main differences between controlled and uncontrolled components.

#### Controlled Component

Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM. It takes its current value through props. The changes are notified through useState Hook.
Let's consider an example to understand it in a better way.

```javascript
import { useState } from "react";

export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState("");

    return (
        <form>
            <label htmlFor="name">
                Name
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label htmlFor="age">
                Age
                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
            </label>
            <label htmlFor="haircolor">
                Hair Color
                <input
                    name="haircolor"
                    type="text"
                    placeholder="Hair Color"
                    value={hairColor}
                    onChange={(e) => setHairColor(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

```

The input field is Controlled because React sets its value from the state <input value={value} ... />. Whenever we type into the input field, the onChange handler updates the state with the input’s value accessed from the event object. The value state variable is the source of truth. When we need to access the value entered by the user into the input field, we have to read the value from the state variable. The Controlled components can help access the value of any input field.

#### Uncontrolled component

Similar to the traditional HTML form inputs, the uncontrolled component can be written using a ref to get form values from the DOM. Thus there is no need to write an event handler for every state update and the HTML elements maintain their own state that will be updated when the input value changes.

```javascript
import { createRef } from "react";

export default function UncontrolledComponent() {
    const nameInput = createRef();
    const ageInput = createRef();
    const hairColorInput = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        ref={nameInput}
                    />
                </label>
                <label htmlFor="age">
                    Age
                    <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        ref={ageInput}
                    />
                </label>
                <label htmlFor="haircolor">
                    Hair Color
                    <input
                        name="haircolor"
                        type="text"
                        placeholder="Hair Color"
                        ref={hairColorInput}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
```




## Conclusion

Both the controlled and uncontrolled form fields have their merit. Evaluate your specific situation and pick the approach — what works for you is good enough.



As always, thanks for reading!