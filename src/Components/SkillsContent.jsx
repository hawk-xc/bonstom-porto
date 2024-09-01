import { useState } from "react";
import DynamicProgressBar from "./../Particle/DynamicProgressBar";
import SkillsLists from "../Particle/SkillsLists";

export default function SkillsContent() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);

  const switchTabs = (tab) => {
    if (tab === 1) {
      setTab1(true);
      setTab2(false);
    } else if (tab === 2) {
      setTab1(false);
      setTab2(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 align-middle light-background">
      <div className="justify-start w-8/12">
        <h2 className="text-4xl">My Skills</h2>
        <span>These are my technical and soft skills</span>
      </div>
      <div
        role="tablist"
        className="w-8/12 transition-all duration-150 tabs tabs-lifted"
      >
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Technical"
          onClick={() => switchTabs(1)}
          defaultChecked
        />
        <div
          role="tabpanel"
          className="flex w-full p-6 shadow-md tab-content bg-base-100 border-base-300 rounded-box"
        >
          <ul
            className={`flex flex-row flex-wrap gap-7 justify-evenly ${
              tab1 ? "" : "hidden"
            }`}
          >
            {SkillsLists.technical.map((skill) => (
              <li className="flex flex-col w-5/12 gap-3">
                <span className="text-xl">{skill.name}</span>
                <DynamicProgressBar key={skill.name} value={skill.value} />
              </li>
            ))}
          </ul>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Soft"
          onClick={() => switchTabs(2)}
        />
        <div
          role="tabpanel"
          className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
        >
          <ul
            className={`flex flex-row flex-wrap gap-7 justify-evenly ${
              tab2 ? "" : "hidden"
            }`}
          >
            {SkillsLists.soft.map((skill) => (
              <li className="w-5/12">
                <span className="text-xl">{skill.name}</span>
                <DynamicProgressBar key={skill.name} value={skill.value} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
