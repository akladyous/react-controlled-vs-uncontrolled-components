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
