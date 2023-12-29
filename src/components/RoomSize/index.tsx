import React from "react";

import { Img, Text } from "components";

type RoomSizeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const RoomSize: React.FC<RoomSizeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[9.63px] items-center justify-start w-[121px]">
          <Img
            className="h-4 w-4"
            src="images/img_bookmark.svg"
            alt="bookmark"
          />
          <Text
            className="flex-1 text-[12.83px] text-gray-700 w-auto"
            size="txtManropeSemiBold1283Gray700"
          >
            3 Bed Room
          </Text>
        </div>
        <div className="flex flex-row gap-[9.63px] items-center justify-start w-[121px]">
          <Img className="h-4 w-4" src="images/img_ticket.svg" alt="ticket" />
          <Text
            className="text-[12.83px] text-gray-700 w-auto"
            size="txtManropeSemiBold1283Gray700"
          >
            1 Bath
          </Text>
        </div>
      </div>
    </>
  );
};

RoomSize.defaultProps = {};

export default RoomSize;
