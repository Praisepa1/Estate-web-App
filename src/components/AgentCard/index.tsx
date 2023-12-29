import React from "react";

import { Button, Img, Text } from "components";

type AgentCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const AgentCard: React.FC<AgentCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[282px] md:h-auto object-cover w-full"
          src="images/img_rectangle5615.png"
          alt="rectangle5615"
        />
        <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-gray-900 text-xl tracking-[-0.40px] w-full"
              size="txtManropeSemiBold20"
            >
              Bruno Fernandes
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start w-full">
              <div className="flex flex-row items-center justify-evenly w-2/5">
                <Img className="h-4 w-4" src="images/img_star.svg" alt="star" />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star_One"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star_Two"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star_Three"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star_gray_600.svg"
                  alt="star_Four"
                />
              </div>
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                4.5 review
              </Text>
            </div>
            <Button className="border border-bluegray-100 border-solid cursor-pointer font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AgentCard.defaultProps = {};

export default AgentCard;
