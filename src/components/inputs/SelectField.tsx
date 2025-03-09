import Select from 'react-select';

type SelectFieldProps = {
  label: string;
  defaultValue: { value: string; label: string };
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

const SelectField = ({
  label,
  defaultValue,
  options,
  onChange,
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-grey-0">{label}</label>
      <div className="relative">
        <Select
          isSearchable={false}
          options={options}
          placeholder={defaultValue.label}
          defaultValue={defaultValue}
          onChange={(selectedOption: { value: string; label: string }) =>
            onChange(selectedOption.value)
          }
          styles={{
            control: (provided: any, state: any) => ({
              ...provided,
              paddingLeft: '1rem',
              paddingRight: '1rem',
              height: '3rem',
              width: '100%',
              borderRadius: '0.25rem',
              backgroundColor: '#343b41',
              transition: 'border-color 200ms',
              border: state.isFocused
                ? '0.0625rem solid #343b41'
                : '0.0625rem solid #343b41',
              boxShadow: state.isFocused ? 'none' : 'none',
              '&:hover': {
                border: state.isFocused
                  ? '0.0625rem solid #f8f9fa'
                  : '0.0625rem solid #343b41',
              },
            }),
            valueContainer: (provided: any) => ({
              ...provided,
              padding: '0',
            }),
            input: (provided: any) => ({
              ...provided,
              margin: '0',
              padding: '0',
            }),
            placeholder: (provided: any) => ({
              ...provided,
              color: '#868e96',
            }),
            menu: (provided: any) => ({
              ...provided,
              borderRadius: '0.25rem',
              border: '0.0625rem solid #343b41',
              backgroundColor: '#343b41',
              overflow: 'hidden',
            }),
            menuList: (provided: any) => ({
              ...provided,
              padding: '0',
              overflow: 'hidden',
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#343b41' : '#868e96',
              color: state.isSelected ? '#f8f9fa' : '#374151',
              padding: '0.5rem 1rem',
              transition: 'background-color 200ms, color 200ms',
            }),
            singleValue: (provided: any) => ({
              ...provided,
              color: '#f8f9fa',
              margin: '0',
              padding: '0',
            }),
            indicatorSeparator: (provided: any) => ({
              ...provided,
              display: 'none',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default SelectField;
