import React from "react";
import NotAuthorized from "./NotAuthorized/NotAuthorized";

const Error = (error) => {
    console.log(error);
    return <NotAuthorized>{error.error.error}</NotAuthorized>;
};

export default Error;
