import { useContext, createContext, useState } from "react";
import Hero from "../pages/Hero";
import Intro from "../pages/Intro";
import Start from "../pages/Start";
import Backlog from "../pages/Backlog";
import Sprint from "../pages/Sprint";
import Teams from "../pages/Teams";
import Teams2 from "../pages/Teams2";
import SprintList from "../pages/SprintList";
import SprintFlow from "../pages/SprintFlow";
import Retro from "../pages/Retro";
import End from "../pages/End";

const ProgressContext = createContext();

export const ProgressContextProvider = () => {
  const [showComponent, setShowComponent] = useState("");

  const gotoPage = (pageName) => {
    setShowComponent(pageName);
  };

  const renderConpnent = () => {
    switch (showComponent) {
      case "Intro":
        return <Intro rate={0} />;
      case "Start": {
        return <Start rate={1} />;
      }
      case "Backlog": {
        return <Backlog rate={2} />;
      }
      case "Teams": {
        return <Teams rate={3} />;
      }
      case "Sprint": {
        return <Sprint rate={4} />;
      }
      case "Teams2": {
        return <Teams2 rate={5} />;
      }
      case "SprintList": {
        return <SprintList rate={6} />;
      }
      case "SprintFlow": {
        return <SprintFlow rate={7} />;
      }
      case "Retro": {
        return <Retro rate={8} />;
      }
      case "End": {
        return <End rate={9} />;
      }
      default:
        return <Hero rate={0} />;
    }
  };

  return (
    <ProgressContext.Provider value={{ gotoPage }}>
      {renderConpnent()}
    </ProgressContext.Provider>
  );
};

export const Progress = () => {
  return useContext(ProgressContext);
};
