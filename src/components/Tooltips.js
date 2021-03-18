import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";

const TooltipItem = props => {
  const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <a className="me-1" color="secondary" id={"Tooltip-" + id} href="#">
        {item.text}
      </a>
      <Tooltip
        placement={item.placement}
        isOpen={tooltipOpen}
        target={"Tooltip-" + id}
        toggle={toggle}
      >
        Tooltip Content!
      </Tooltip>
    </span>
  );
};

const TooltipExampleMulti = props => {
  return (
    <>
      {[
        {
          placement: "top",
          text: "Top"
        },
        {
          placement: "bottom",
          text: "Bottom"
        },
        {
          placement: "left",
          text: "Left"
        },
        {
          placement: "right",
          text: "Right"
        }
      ].map((tooltip, i) => {
        return <TooltipItem key={i} item={tooltip} id={i} />;
      })}
    </>
  );
};

export default TooltipExampleMulti;