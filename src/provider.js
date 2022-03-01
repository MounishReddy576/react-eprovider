import { useState } from 'react';
const Provider = () => {
  const [AWS, setAWS] = useState(false);
  const [Azure, setAzure] = useState(false);
  const [GCP, setGCP] = useState(false);
  const [None, setNone] = useState(false);

  const handleAWS = () => {
    setAWS(AWS);
  };

  const handleAzure = () => {
    setAzure(Azure);
  };
  const handleGCP = () => {
    setGCP(GCP);
  };
  const handleNone = () => {
    setNone(None);
  };
  return (
    <div className="provider">
      <input
        id="cloud"
        name="AWS"
        value={AWS}
        type="radio"
        onChange={handleAWS}
      />
      <input
        id="cloud"
        name="Azure"
        label="Azure"
        value={Azure}
        type="radio"
        onChange={handleAzure}
      />
      <input
        id="cloud"
        name="GCP"
        label="GCP"
        value={GCP}
        type="radio"
        onChange={handleGCP}
      />
      <input
        id="cloud"
        name="None"
        label="None"
        value={None}
        type="radio"
        onChange={handleNone}
      />
    </div>
  );
};
export default Provider;
