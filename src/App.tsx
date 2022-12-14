import OnboardingForm from "./components/OnboardingForm";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <main>
        <div className="bg-primary">
          <section className="max-w-7xl mx-auto relative">
            <div className="px-12 sm:py-32 py-12">
              <h1 className="font-playfair text-5xl pb-12 text-white tracking-wide">
                Welcome to Ayble's onboarding form.
              </h1>
              <div className="max-w-5xl">
                <p className="text-white text-2xl sm:mb-8">
                  Since you have indicated you may have Ulcerative Colitis,
                  please answer the following questions as closely to your
                  knowledge for us to best understand how your feeling.
                </p>
              </div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6349784a667b342cb347c1aa/6358a0c337c8c33ce1cda747_Riso%20-%20Square.svg"
              className="absolute top-10 invert contrast-50 opacity-20 w-[380px] sm:left-[-14%] left-[-60%]"
            />
          </section>
        </div>
        <section className="mx-w-7xl mx-auto px-12 py-20">
          <OnboardingForm />
        </section>
      </main>
    </>
  );
}

export default App;
