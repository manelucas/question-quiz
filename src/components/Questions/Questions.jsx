import React from "react";
import styles from "./Questions.module.scss";

const Questions = () => {
  const answers = {
    firstQuestion: "health",
    secondQuestion: "cinderella",
    thirdQuestion: "carousel",
    fourthQuestion: "A Chubb",
  };

  const wrongAnswer = () => {
    // let answer = e.target.value;
    return "Your answer is wrong. Try again!";
  };

  const correctAnswer = () => {
    // e.target.value;
    return "Correct! Go to the next question";
  };

  return (
    <form>
      <div>
        <p>
          1. In the UK, the abbreviation NHS stands for National what Service?
        </p>
        <label onclick={wrongAnswer}>Humanity</label>
        <input type="radio" />
        <label onclick={correctAnswer}>Health</label>
        <input type="radio" />
        <label onclick={wrongAnswer}>Honour</label>
        <input type="radio" />
        <label onclick={wrongAnswer}>Household</label>
        <input type="radio" />
      </div>

      <div>
        <p>
          2. 200 - Which Disney character famously leaves a glass slipper behind
          at a royal ball?
        </p>
        <label>Pocahontas</label>
        <input type="radio" />
        <label>Sleeping Beauty</label>
        <input type="radio" />
        <label>Cinderella</label>
        <input type="radio" />
        <label>Elsa</label>
        <input type="radio" />
      </div>

      <div>
        <p>
          3. 300 - What name is given to the revolving belt machinery in an
          airport that delivers checked luggage from the plane to baggage
          reclaim?
        </p>
        <label>Hangar</label>
        <input type="radio" />
        <label>Terminal</label>
        <input type="radio" />
        <label>Concourse</label>
        <input type="radio" />
        <label>Carousel</label>
        <input type="radio" />
      </div>

      <div>
        <p>
          4. 500 - Which of these brands was chiefly associated with the
          manufacture of household locks?
        </p>
        <label>Phillips</label>
        <input type="radio" />
        <label>Flymo</label>
        <input type="radio" />
        <label>Chubb</label>
        <input type="radio" />
        <label>Ronseal</label>
        <input type="radio" />
      </div>

      <div>
        <p>
          5. 1,000 - The hammer and sickle is one of the most recognisable
          symbols of which political ideology?
        </p>
        <label>Republicanism</label>
        <input type="radio" />
        <label>Communism</label>
        <input type="radio" />
        <label>Conservatism</label>
        <input type="radio" />
        <label>Liberalism</label>
        <input type="radio" />
      </div>
    </form>
  );
};

export default Questions;
