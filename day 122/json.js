import { Combobox } from "@headlessui/react";
import { useState } from "react";

const people = ["Jocelyn", "Jonathan", "Josh"];

const ComboboxComponent = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
          {filteredPeople.map((person) => (
            <Combobox.Option
              key={person}
              value={person}
              className={({ active }) =>
                `cursor-pointer select-none px-4 py-2 ${
                  active ? "bg-blue-500 text-white" : "text-gray-900"
                }`
              }
            >
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default ComboboxComponent;
