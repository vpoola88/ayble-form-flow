import { useState } from "react";

function OnboardingForm() {
  const [formData, setFormData] = useState({
    formQuestion: "",
    formAnswer: "",
    formAnswerValue: "",
  });

  const [formInputStatus, setFormInputStatus] = useState(1);

  function handleChange(e) {
    console.log("question" + e.target?.value);
    setFormInputStatus(2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul>
          <li className="bg-gray-50 p-8 mb-4">
            <p id="onboarding-uc-1" className="text-2xl">
              On average, how many bowel movements did you have each day (during
              the daytime) over the past 7 days (1 week)?:
            </p>
            <div className="flex flex-col space-y-2 text-xl pt-8">
              <label
                id="onboarding-uc-ans-1-03"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-1" type="radio" value="0" />
                <span className="px-2">0-2 stools/day</span>
              </label>
              <label
                id="onboarding-uc-ans-1-46"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-1" type="radio" value="1" />
                <span className="px-2">4-6 stools/day</span>
              </label>
              <label
                id="onboarding-uc-ans-1-79"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-1" type="radio" value="2" />
                <span className="px-2">7-9 stools/day</span>
              </label>
              <label
                id="onboarding-uc-ans-1-10-more"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-1" type="radio" value="3" />
                <span className="px-2">10+ stools/day</span>
              </label>
            </div>
          </li>

          <li
            className={`"bg-gray-50 p-8 mb-4" ${
              formInputStatus > 1 ? "" : "opacity-60 cursor-not-allowed"
            }`}
          >
            <p id="onboarding-uc-2" className="text-2xl">
              On average, how many bowel movements did you have each night
              (during the night) over the past 7 days (1 week)?:
            </p>
            <div className="flex flex-col space-y-2 text-xl pt-8">
              <label
                id="onboarding-uc-ans-2-0"
                onClick={(e) => handleChange(e)}
              >
                <input
                  disabled={formInputStatus > 2 ? true : false}
                  name="onboarding-uc-2"
                  type="radio"
                  value="0"
                />
                <span className="px-2">0 stools/night</span>
              </label>
              <label
                id="onboarding-uc-ans-2-13"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-2" type="radio" value="1" />
                <span className="px-2">1-3 stools/night</span>
              </label>
              <label
                id="onboarding-uc-ans-2-46"
                onClick={(e) => handleChange(e)}
              >
                <input name="onboarding-uc-2" type="radio" value="2" />
                <span className="px-2">4-6 stools/night</span>
              </label>
            </div>
          </li>
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
