import React from "react";

const ContentDescription = ({ description }: { description: string }) => {
  //   const [responsibilities, requirements] = description.split("\n\n");

  return (
    <div>
      <ul>
        {description &&
          description
            .split("\n")
            .map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default ContentDescription;
