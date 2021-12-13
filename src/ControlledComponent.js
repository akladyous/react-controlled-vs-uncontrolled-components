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
