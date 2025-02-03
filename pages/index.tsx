/* eslint-disable */
import Questionnaire from "@/components/questionnaire";
import Image from "next/image";
import { useState } from "react";
import { Timezone } from "@/types/timezone";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);


  const [questionnaireData, setQuestionnaireData] = useState<{
    timezones: Timezone[];
    sleepTime: string;
  }>({
    timezones: [],
    sleepTime: "",
  });

  const handleSubmit = () => {
    console.log("submitted");
    setSubmitted(true);
  };

  const handleDataChange = (data: { timezones: any[]; sleepTime: string }) => {
    setQuestionnaireData(data);
  };

  return (
    <div className="main-container">
    <div className="container">
      <div className="text-2xl">
        <Image src="/pilltime.svg" alt="pill time! written, logo of the website" width={400} height={400} />
      </div>

      <div className="welcome hover:text-red-200 text-2xl">
          Welcome to PillTime!
      </div>

      <div className="under-welcome">
        Don&apos;t be scared to take your medicine anymore.

      </div>
      </div>

        {!submitted && <div className="questions">
          <Questionnaire onDataChange={handleDataChange} onSubmit={handleSubmit}/>
        </div>}

        {submitted && 
        <div className="submitted">
          <div className="submitted-text">
            Thank you for submitting your information!
          </div>
          <div className="submitted-text">
            We will get back to you soon.
          </div>
        </div> }


        <div className="page-end">
          owned by PillTime! LLC
        </div>



    
      
    </div>
  );
}

