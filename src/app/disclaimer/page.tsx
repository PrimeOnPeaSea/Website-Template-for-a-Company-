import React from "react";

const Disclaimer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-md">
      <h1 className="text-center text-destructive text-2xl font-semibold">
        Disclaimer
      </h1>
      <p className="text-justify text-sm text-muted-foreground">
        The Images, Logos and Content used in this website are used as a
        reference for the template and are not owned by me.
        <br />
        All the rights are reserved by the respective owners.
      </p>
    </div>
  );
};

export default Disclaimer;
