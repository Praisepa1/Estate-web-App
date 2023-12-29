import React from "react";

import { Img, Text } from "components";

type NewsAndConsultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const NewsAndConsult: React.FC<NewsAndConsultProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="md:h-[350px] sm:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
          src="images/img_image_350x384.png"
          alt="image"
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
            size="txtManropeBold24WhiteA700"
          >
            9 Easy-to-Ambitious DIY Projects to Improve Your Home
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-96 md:w-full">
            <Text
              className="text-deep_orange-400 text-lg w-auto"
              size="txtManropeBold18Deeporange400"
            >
              Read the Article
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright_deep_orange_400.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

NewsAndConsult.defaultProps = {};

export default NewsAndConsult;
