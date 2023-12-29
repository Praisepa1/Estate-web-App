import React from "react";

import { Button, Img, Text } from "components";

type UsersProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Users: React.FC<UsersProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
          <Img className="h-8" src="images/img_clock.svg" alt="clock" />
        </Button>
        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
          <Text
            className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
            size="txtManropeExtraBold46"
          >
            $15.4M
          </Text>
          <Text
            className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
            size="txtManropeSemiBold20Bluegray600"
          >
            <>
              Owned from
              <br />
              Properties transactions
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

Users.defaultProps = {};

export default Users;
