import React from "react";

const student = props => {
  return (
    <div className="students">
      <h3>Alumnos:</h3>
      {props.students.map((elem, index) => {
        return (
          <p>

            <span className="nameStyle"
              onClick=
              {name => {
                return props.onMarkClick(name.currentTarget.textContent);
              }}
              >{elem.name}
            </span>

            {elem.markView ? (
            <span> - Nota: {elem.mark}</span>
            ) : ""}
          </p>
        );
      })}
    </div>
  );
};

export default student;
