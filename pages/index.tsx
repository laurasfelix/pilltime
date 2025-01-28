import Image from "next/image";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  const goToMain = () => {

    router.push("/main");

  };

  const goLearn = () => {

    router.push("/learn");

  };

  return (
    <div className="container">
      <div className="text-2xl">
        <Image src="/pilltime.svg" alt="" width={400} height={400} />
        <div className="welcome hover:text-red-200">
          Welcome to PillTime!
        </div>
  
      </div>

      <div className="under-welcome">
        Don&apos;t be scared to take your medicine anymore.

          <div>

            <svg
                className="line"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 10 Q30 0 60 10 T120 10"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
            </svg>
          
          </div>

      </div>

      <div className="try-button">
        <button onClick={goToMain}> try it now! </button>
      </div>

      <div className="learn-button">
        <button onClick={goLearn}> learn more </button>
      </div>

      <div className="page-end">
        owned by PillTime! LLC
      </div>
      
    </div>
  );
}

