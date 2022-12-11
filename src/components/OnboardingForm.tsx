import PreviousMap from "postcss/lib/previous-map";
import { useEffect, useState } from "react";

const questions = [
  {
    question: {
      id: "onboarding-uc-1",
      question:
        "On average, how many bowl movements did you have each day (during the daytime) over the past 7 days (1 week)?",
    },
    answers: [
      { id: "onboarding-uc-ans-1-03", response: "0-3 stools/day", score: 0 },
      { id: "onboarding-uc-ans-1-46", response: "4-6 stools/day", score: 1 },
      { id: "onboarding-uc-ans-1-79", response: "7-9 stools/day", score: 2 },
    ],
  },
  {
    question: {
      id: "onboarding-uc-2",
      question:
        "On average, how many bowl movements did you have each night (during the night) over the past 7 days (1 week)?",
    },
    answers: [
      { id: "onboarding-uc-ans-2-0", response: "0 stools/day", score: 0 },
      { id: "onboarding-uc-ans-2-13", response: "1-3 stools/day", score: 1 },
      { id: "onboarding-uc-ans-2-46", response: "4-6 stools/day", score: 2 },
    ],
  },
  {
    question: {
      id: "onboarding-uc-3",
      question:
        "How urgent were your bowel movements on average over the past 7 days (1 week)?",
    },
    answers: [
      { id: "onboarding-uc-ans-3-urgency", response: "No urgency", score: 0 },
      { id: "onboarding-uc-ans-3-hurry", response: "I had to hurry", score: 1 },
      {
        id: "onboarding-uc-ans-3-go",
        response: "I had to go immediately",
        score: 2,
      },
      { id: "onboarding-uc-ans-3-in", response: "I was incontent", score: 3 },
    ],
  },
  {
    question: {
      id: "onboarding-uc-4",
      question:
        "On average how much blood was present in your stool over the past 7 days (1 week)?",
    },
    answers: [
      { id: "onboarding-uc-ans-4-none", response: "None", score: 0 },
      { id: "onboarding-uc-ans-4-trace", response: "Trace amounts", score: 1 },
      {
        id: "onboarding-uc-ans-4-mod",
        response: "A moderate amount (but less than half the time)",
        score: 2,
      },
      {
        id: "onboarding-uc-ans-4-lot",
        response: "A lot (more than half the time)",
        score: 3,
      },
    ],
  },
  {
    question: {
      id: "onboarding-uc-5",
      question:
        "How woulud you rate your general wellbeing over the past 7 days (1 week)? 0 (worst) to 10 (best)",
    },
    answers: [
      {
        id: "onboarding-uc-ans-5-very-well",
        response: "Very well (>7)",
        score: 0,
      },
      {
        id: "onboarding-uc-ans-5-par",
        response: "Slightly below par (6)",
        score: 1,
      },
      { id: "onboarding-uc-ans-5-poor", response: "Poor (5)", score: 2 },
      {
        id: "onboarding-uc-ans-5-very-poor",
        response: "Very poor (4)",
        score: 3,
      },
      {
        id: "onboarding-uc-ans-5-terrible",
        response: "Terrible (<4)",
        score: 4,
      },
    ],
  },
];

function OnboardingForm() {
  const [formData, setFormData] = useState({});
  const [formStep, setFormStep] = useState(0);

  const [formInputStatus, setFormInputStatus] = useState(0);

  useEffect(() => {
    let status = questions.length;
    for (var i = 0; i <= questions.length; i++) {
      if (i > 0) {
        // set disabled class here depending on the index of the questions. I didn't have time to finish this, but
        // I think we can take the index, and disable everything except the current index. Once the current index
        // changes, then we would take i + 1 and enable that next one. I would then need to add a disabled property
        // to the radio input below on line 150 and conditionally set disabled to true or false.
      }
    }
  }, [formInputStatus]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // we can error handle here

    // if no errors
    console.log("submitted");
    console.log(formData);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul>
          {questions.map((question, index) => (
            <li
              key={index}
              className={`${
                index > 0 ? "opacity-60 cursor-not-allowed" : ""
              } bg-gray-50 p-8 mb-4`}
            >
              <p id="onboarding-uc-1" className="text-2xl">
                {question.question.question}
              </p>
              <div className="flex flex-col space-y-2 text-xl pt-8">
                <label id={question.question.id} onClick={handleChange}>
                  {question.answers.map((answer, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={question.question.id}
                        value={answer.id}
                      />
                      <span className="px-2">{answer.response}</span>
                    </div>
                  ))}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="bg-secondary px-12 py-4 my-4 rounded-full cursor-pointer border-2 border-secondary text-lg
                hover:bg-primary hover:text-white hover:border-white hover:border-2 
                transform transition duration-300 ease-out"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OnboardingForm;
