import React, { useState, useEffect } from "react";
import styled from "./WorkSample.module.css";
import workSamplesData from "./Data.json";

const WorkSample = () => {
  const [workSamples, setWorkSamples] = useState([]);

  useEffect(() => {
    setWorkSamples(workSamplesData);
  }, []);

  return (
    <div className={styled.workSampleWrapper}>
      {workSamples.map((sample) => (
        <div key={sample.Id} className={styled.workSampleContainer}>
          <div className={styled.workSampleMedia}>
            <img src={sample.Media} alt={sample.Header} />
          </div>
          <div className={styled.workSampleInfo}>
            <h2>{sample.Header}</h2>
            <p>{sample.Description}</p>
            <a
              href={sample.pHref}
              className={styled.buttonPrimary}
              target="_blank"
            >
              {sample.BtnPrimary}
            </a>
            <a
              href={sample.sHref}
              className={styled.buttonSecondary}
              target="_blank"
            >
              {sample.BtnSecondary}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSample;
