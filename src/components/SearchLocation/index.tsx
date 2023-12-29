import React from "react";

import { Img, Text } from "components";

type SearchLocationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const SearchLocation: React.FC<SearchLocationProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_refresh.svg"
            alt="refresh"
          />
          <Text
            className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
            size="txtManropeExtraBold28"
          >
            <>
              Search <br />
              your location
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

SearchLocation.defaultProps = {};

export default SearchLocation;
