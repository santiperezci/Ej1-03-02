import React from "react";

import Teacher from "./Teacher";
import Student from "./Student";

const subject = props => {
  return (
    <div className="subject">
      <h1
        onClick={title => {
          return props.onSubjectClick(title.currentTarget.textContent);
        }}
      >
        {props.title}
      </h1>
      {props.subjectView ? (
        <div>
          <Teacher teacher={props.teacher} />
          <Student students={props.students} onMarkClick={props.onMarkClick} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default subject;
