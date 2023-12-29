import React from "react";

import { Img, Text } from "components";

type ReviewProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "name"
  | "start0"
  | "star1"
  | "star2"
  | "star3"
  | "reveiwNumber"
  | "date"
  | "img"
  | "username"
  | "userPosition"
> &
  Partial<{
    name: string;
    start0: string;
    star1: string;
    star2: string;
    star3: string;
    reveiwNumber: string;
    date: string;
    img: string;
    username: string;
    userPosition: string;
  }>;

const Review: React.FC<ReviewProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <Text
            className="leading-[165.00%] max-w-[1090px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
            size="txtManropeSemiBold24Gray600"
          >
            {props?.name}
          </Text>
          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[552px] w-full">
              <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                  <Img className="h-6 w-6" alt="star" src={props?.start0} />
                  <Img className="h-6 w-6" alt="star_One" src={props?.star1} />
                  <Img className="h-6 w-6" alt="star_Two" src={props?.star2} />
                  <Img
                    className="h-6 w-6"
                    alt="star_Three"
                    src={props?.star3}
                  />
                </div>
                <Text
                  className="flex-1 text-gray-600 text-xl tracking-[-0.40px] w-auto"
                  size="txtManropeSemiBold20Gray600"
                >
                  {props?.reveiwNumber}
                </Text>
              </div>
              <Text
                className="flex-1 text-gray-600 text-xl tracking-[-0.40px] w-auto"
                size="txtManropeSemiBold20Gray600"
              >
                {props?.date}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-20 md:h-auto rounded-[50%] w-20"
                alt="ellipse2695"
                src={props?.img}
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  {props?.username}
                </Text>
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeSemiBold18"
                >
                  {props?.userPosition}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Review.defaultProps = {
  name: "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
  start0: "images/img_star_gray_900.svg",
  star1: "images/img_star_gray_900.svg",
  star2: "images/img_star_gray_900.svg",
  star3: "images/img_star_gray_900_24x24.svg",
  reveiwNumber: "4.5 review",
  date: "02 June 2022",
  img: "images/img_ellipse2695.png",
  username: "Taylor Wilson",
  userPosition: "Product Manager - Static Mania",
};

export default Review;
