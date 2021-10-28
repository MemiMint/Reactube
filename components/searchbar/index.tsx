import React, { FunctionComponent, useState } from "react";
import router from "next/router";
import { HiSearch } from "react-icons/hi";
import { IState } from "./Istate";

export const SearchBar: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState<IState>({
    search: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSearch = (): void => {
    if (!state.search) return;
    router.push(state.search);
  };

  return (
    <div className="flex items-center w-3/6 h-8 space-x-2 lg:w-2/5 lg:h-10">
      <input
        className="w-full h-full border-none bg-white rounded-sm p-2 outline-none placeholder-gray-300 text-xs text-gray-400 font-medium lg:text-sm"
        placeholder="Search..."
        name="search"
        value={state.search}
        onChange={onChange}
        onKeyPress={
          (event) => {
            if (event.key === 'Enter' && state.search) onSearch();
            else return;
          }
        }
      />
      <button
        className="hidden transition duration-300 p-2 h-full border-none bg-white text-green-300 text-lg font-medium rounded-sm hover:bg-green-400 hover:text-white lg:block"
        onClick={onSearch}
      >
        <HiSearch />
      </button>
    </div>
  );
};
