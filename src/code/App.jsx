import { useEffect, useState } from "react";
import IconSelector from "../svg/icon-selector";
import data from "../data.JSON";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching or parsing JSON:", error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row rounded-b-3xl md:rounded-3xl max-w-[800px] shadow-2xl m-auto overflow-auto">
      <ResultDiv categories={categories} />
      <SummaryDiv categories={categories} />
    </div>
  );
}

function ResultDiv({ categories }) {
  let average = 0;
  if (categories.length !== 0) {
    const sumOfPoints = categories.reduce((total, currentValue) => {
      console.log(total);
      return total + currentValue.score;
    }, 0);

    average = Math.round(sumOfPoints / categories.length);
  }
  return (
    <div className="flex md:flex-1 flex-col justify-between p-8 md:p-10 gap-8 rounded-[inherit] bg-gradient-to-b from-[#7857ff] to-[#2e2be9]">
      <h2 className="text-lightLavender text-center">Your Result</h2>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] rounded-full aspect-square w-[60%] max-w-[200px] self-center">
        <p className="text-7xl text-[#ffffff]">{average}</p>
        <p className="text-lg text-lightLavender">of 100</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center md:px-8">
        <h1 className="text-[#ffffff]">Great</h1>
        <p className="text-lg text-lightLavender">
          Your scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

function SummaryDiv({ categories }) {
  return (
    <div className="flex flex-col md:flex-1 p-8 md:p-10 gap-8">
      <h2 className="text-[#2C354F] font-bold">Summary</h2>
      <PointsDiv categories={categories} />
      <button className="text-[#ffffff] font-bold p-4 rounded-full bg-gradient-to-b from-[#7857ff] to-[#2e2be9] shadow hover:from-[#303B59] hover:to-[#303B59]">
        Continue
      </button>
    </div>
  );
}

function PointsDiv({ categories }) {
  const pointDivs = [];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    if (i % 4 === 0) {
      pointDivs.push(
        <RedPointDiv
          logoSource={category.icon}
          name={category.category}
          point={category.score}
        />
      );
    } else if (i % 4 === 1) {
      pointDivs.push(
        <YellowPointDiv
          logoSource={category.icon}
          name={category.category}
          point={category.score}
        />
      );
    } else if (i % 4 === 2) {
      pointDivs.push(
        <GreenPointDiv
          logoSource={category.icon}
          name={category.category}
          point={category.score}
        />
      );
    } else {
      pointDivs.push(
        <BluePointDiv
          logoSource={category.icon}
          name={category.category}
          point={category.score}
        />
      );
    }
  }
  return <div className="flex flex-col gap-4">{pointDivs}</div>;
}

function RedPointDiv({ logoSource, name, point }) {
  return (
    <div
      className={
        "flex flex-row p-4 gap-4 bg-opacity-5 rounded-lg bg-lightRed items-center"
      }
    >
      <IconSelector path={logoSource} />
      <h2 className="text-xl flex-1 text-lightRed"> {name}</h2>
      <h3 className="text-[#2C354F]">
        {point} <span className="text-[#969698]"> / 100</span>{" "}
      </h3>
    </div>
  );
}

function YellowPointDiv({ logoSource, name, point }) {
  return (
    <div
      className={
        "flex flex-row p-4 gap-4 bg-opacity-5 rounded-lg bg-orangeYellow items-center"
      }
    >
      <IconSelector path={logoSource} />
      <h2 className="text-xl flex-1 text-orangeYellow"> {name}</h2>
      <h3 className="text-[#2C354F]">
        {point} <span className="text-[#969698]"> / 100</span>{" "}
      </h3>
    </div>
  );
}

function GreenPointDiv({ logoSource, name, point }) {
  return (
    <div
      className={
        "flex flex-row p-4 gap-4 bg-opacity-5 rounded-lg bg-greenTeal items-center"
      }
    >
      <IconSelector path={logoSource} />
      <h2 className="text-xl flex-1 text-greenTeal"> {name}</h2>
      <h3 className="text-[#2C354F]">
        {point} <span className="text-[#969698]"> / 100</span>{" "}
      </h3>
    </div>
  );
}

function BluePointDiv({ logoSource, name, point }) {
  return (
    <div
      className={
        "flex flex-row p-4 gap-4 bg-opacity-5 rounded-lg bg-cobaltBlue items-center"
      }
    >
      <IconSelector path={logoSource} />
      <h2 className="text-xl flex-1 text-cobaltBlue"> {name}</h2>
      <h3 className="text-[#2C354F]">
        {point} <span className="text-[#969698]"> / 100</span>{" "}
      </h3>
    </div>
  );
}
