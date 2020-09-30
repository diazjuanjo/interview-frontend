import React from "react";

/* THE FIX STARTS HERE */

// state data for 3 counters

// Counter Component
const Counter = ({ counter, onIncrement, onDecrement, onChange }) => {
  const [value, setValue] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    counter.value = parseInt(value);
    onChange();
  };

  return (
    <div className="d-flex my-2">
      <strong>{counter.value}</strong>
      <div className="ml-2">
        <button
          className="btn btn-danger mr-1"
          onClick={() => onDecrement(counter)}
        >
          -
        </button>
        <button
          className="btn btn-success mr-1"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-inline">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="number"
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="submit"
            className="btn btn-primary form-control ml-1"
            value="Set"
          />
        </div>
        <div className="form-group"></div>
      </form>
    </div>
  );
};

const Total = ({ total }) => {
  return (
    <div className="alert alert-info w-25" role="alert">
      <strong>Total: </strong> {total()}
    </div>
  );
};

const GroupOfCounters = () => {
  const [data, setData] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  const [id, setId] = React.useState(4);

  const onIncrement = (counter) => {
    counter.value++;
    setData([...data]);
  };

  const onDecrement = (counter) => {
    counter.value--;
    setData([...data]);
  };

  const onNew = () => {
    setData([...data, { id: `${id}`, value: 0 }]);
    setId(id + 1);
  };

  const total = () => {
    return data.map((data) => data.value).reduce((acc, curr) => acc + curr);
  };

  const onChange = () => {
    setData([...data]);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={onNew}>
        new counter
      </button>
      {data.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChange}
        />
      ))}
      <Total total={total} />
    </div>
  );
};

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{" "}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{" "}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{" "}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{" "}
              <strong>onDecrement</strong> props from the (new){" "}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />
    </div>
  );
};

export default Exercise02;
