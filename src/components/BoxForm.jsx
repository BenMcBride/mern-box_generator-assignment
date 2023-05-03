import React, { useState } from "react";

const BoxForm = (props) => {
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");

  const [box, setBox] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBox([...box, { color: newColor, size: newSize + "px" }]);
    console.log(box);
    setNewColor("");
    setNewSize("");
  };

  return (
    <div className="container">
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label for="boxColor">
            Color: 
          </label>
          <input
            onChange={(e) => {
              setNewColor(e.target.value);
            }}
            type="text"
            name="newColor"
            value={newColor}
          />
        </div>
        <div className="col-auto">
          <label for="boxSize">
            Size: 
          </label>
          <input
            onChange={(e) => {
              setNewSize(e.target.value);
            }}
            type="number"
            name="newSize"
            value={newSize}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <div className="row justify-content-around">
        {box.map((box, i) => {
          let style = {
            backgroundColor: box.color,
            width: box.size,
            height: box.size,
          };
          return <div key={i} style={style}></div>;
        })}
      </div>
    </div>
  );
};

export default BoxForm;
