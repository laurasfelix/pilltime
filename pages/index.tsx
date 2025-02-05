/* eslint-disable */
import Questionnaire from "@/components/questionnaire";
import Image from "next/image";
import { useState } from "react";
import { Timezone } from "@/types/timezone";
import { useRouter } from "next/router";
import Hoverword from "@/components/hoverword";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleNewClick = () =>{

    setClicked(!clicked);

  };


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

  const refreshPage = () => {
    router.reload();
  };

  return (
    <div className="main-container">

        
          <div className="text-2xl pilltime">

              <div className="logo">
                <button onClick={refreshPage}> <Image src="/pilltime.svg" alt="pill time! written, logo of the website" width={400} height={400} /> </button>
              </div>

              <div className="welcome-container">
                {!submitted && <div className="welcome hover:text-red-200">
                    <button onClick={handleNewClick}> New to PillTime? </button>
                </div>} 
              </div>

          </div>
   
          <div className="questions">


            <div className="form-container">

              {!submitted && <Questionnaire onDataChange={handleDataChange} onSubmit={handleSubmit}/>}

              {submitted && 
                <div className="submitted">
                  <div className="submitted-text">
                    Thank you for submitting your information!
                  </div>
                  <div className="submitted-text">
                    We will get back to you soon.
                  </div>
                </div> }

            </div>


            <div className="info-container">

          
              <div className={`introduction ${clicked && !submitted ? "show" : ""}`}>
                  <div className="question-text">
                    <span className="first-text text-2xl hover:text-red-200"> Welcome to Pilltime!  </span>
                  </div>
                  <div className="question-text">
                    <Hoverword word="Pilltime is a service that helps frequent travelers manage their medication and the timing of it." color="hover:text-stone-900 hover:bg-amber-400" />
                  </div>

                  <div className="question-text">
                  <Hoverword word="We ask you some questions to find out the optimal time to take your medication!" color="hover:text-stone-900 hover:bg-amber-400" />
                  </div>

                  <div className="question-text">
                  <Hoverword word="Ready? Let&apos;s get started!" color="hover:text-stone-900 hover:bg-amber-400" />
                  </div>
              </div>
            

            </div>


        
          
          </div>
        


        <div className="page-end">
          owned by PillTime! LLC
        </div>



    
      
    </div>
  );
}

