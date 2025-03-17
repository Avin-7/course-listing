import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import { RxMagnifyingGlass } from "react-icons/rx";
import React, { useState } from "react";
const searchClient = algoliasearch(
  "8FNX2C7C1V",
  "9dda9bd2679e3376379e2e7a98c96f4b"
);

function Hit({ hit }) {
  if (hit) {
    return (
      <article className=" px-[18px] ">
        <div className=" border-[1px] border-zinc-500 my-3 p-2 hover:bg-purple-950 ease-linear transition-colors">
          <p className=" text-gray-400 text-sm">{hit.category}</p>
          <h1 className="text-sm">
            <Highlight attribute="name" hit={hit} />
          </h1>
        </div>
      </article>
    );
  }
}

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <div className=" flex flex-col justify-center items-center z-50 relative">
        <InstantSearch searchClient={searchClient} indexName="data" insights>
          <SearchBox
            classNames={{
              form: "relative bg-neutral-800 w-[480px] max-md:w-[380px] max-sm:w-[300px] rounded-t-md rounded-b-sm ",
              input:
                " w-[400px] max-lg:w-72 max-md:w-60 max-sm:w-38 py-3 px-2 ml-12 bg-transparent rounded-t-xl outline-none  placeholder-gray-400 text-gray-100 font-figtree",
              submitIcon: "absolute top-3 left-2 mx-3",
              loadingIcon: " absolute top-4 right-2",
            }}
            placeholder="Enter keywords"
            submitIconComponent={({ classNames }) => (
              <div className={classNames.submitIcon}>
                <RxMagnifyingGlass
                  className=" text-neutral-600"
                  size={"1.5em"}
                />
              </div>
            )}
            resetIconComponent={({ classNames }) => (
              <div className={classNames.resetIcon}></div>
            )}
            searchAsYouType={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && (
            <Hits
              className=" text-white bg-neutral-800  w-[480px] max-md:w-[380px] max-sm:w-[300px] absolute top-10 "
              hitComponent={Hit}
            />
          )}
        </InstantSearch>
      </div>
    </div>
  );
}
export default SearchBar;
