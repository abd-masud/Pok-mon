import { info } from "console";
import { FunctionComponent, ReactNode } from "react";

export const CardDetails = (props: any) => {
  return (
    <div className="">
      <h2>
        <span className="font-bold">Name :</span> {props.name}
      </h2>
    </div>
  );
};
