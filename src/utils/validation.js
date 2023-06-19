import React from "react";

export default function Validation (target) {
  const [valitionData, setvalidationData]   = React.useState({});
  const [errorMessage, setErrorMessage]     = React.useState({name: '', about: ''});

  const validationObject = {valitionData, errorMessage};

  setvalidationData({...valitionData, [target.name]: target.validity.valid});
  setErrorMessage({...errorMessage, [target.name]: target.validationMessage});

  console.log(validationObject);
  console.log(valitionData, errorMessage);
}
