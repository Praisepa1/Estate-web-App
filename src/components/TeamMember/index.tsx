import React from "react";

import { Img, Text } from "components";

type TeamMemberProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const TeamMember: React.FC<TeamMemberProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
          src="images/img_rectangle5596.png"
          alt="rectangle5596"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-gray-900 text-xl tracking-[-0.40px] w-full"
            size="txtManropeSemiBold20"
          >
            Kausar Pial
          </Text>
          <Text
            className="text-gray-700 text-lg w-full"
            size="txtManropeRegular18Gray700"
          >
            CEO
          </Text>
        </div>
      </div>
    </>
  );
};

TeamMember.defaultProps = {};

export default TeamMember;
