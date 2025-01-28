import Image from "next/image";


export default function Home() {
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

      <div className="signup">
        <button> sign up </button>
      </div>

      <div className="signin">
        <button> sign in </button>
      </div>

      <div className="page-end">
        owned by PillTime! LLC
      </div>
      
    </div>
  );
}
