import React from "react";

const List = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((person) => {
        const { id, name, age, image } = person; //object destructuring
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{age} years</p>
                </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};
export default List;
