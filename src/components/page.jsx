import React from "react";
import Map from "./map";
import ControlledTabs from "./controlledTabs"
import Second from "./second";
import Third from "./third";


export const Page = () => {
  return (
    <div>
    <Map></Map>
    <ControlledTabs></ControlledTabs>
    <Second></Second>
    <Third></Third>
    </div>
  );
};
export default Page;