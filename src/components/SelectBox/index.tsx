import React from "react";
import Select, { Props } from "react-select";
import { ErrorMessage } from "../ErrorMessage";

type SelectOptionType = { value: string; label: string };

export type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    placeholder: string;
    className: string;
    options: SelectOptionType[];
    isSearchable: boolean;
    placeholderClassName: string;
    isMulti: boolean;
    onChange: (value: string | string[]) => void;
    value: string | SelectOptionType | SelectOptionType[];
    errors: string[];
    indicator: React.ReactElement;
    getOptionLabel: (option: SelectOptionType) => string;
    children: React.ReactNode;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      placeholder = "Select",
      className = "",
      options = [],
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange = () => {},
      value = "",
      errors = [],
      indicator,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange(data?.map((d) => d.value) || []);
      } else {
        onChange(data?.value);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className}`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { SelectBox };
