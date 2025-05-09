import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import { RxMagnifyingGlass } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import conf from "../../conf/conf";
import { Link } from "react-router-dom";
const searchClient = algoliasearch(conf.algoliaAppId, conf.algoliaSearchApiKey);

function Hit({ hit }) {
  if (hit) {
    const id = hit.$id;
    return (
      <Link to={`/course/${id}`}>
        <article className=" px-[18px]">
          <div className=" border-[1px] border-purple-950 my-3 p-3.5 hover:bg-purple-950 ease-linear transition-colors">
            <p className=" text-gray-400 text-sm">{hit.category}</p>
            <h1 className="text-sm">
              <Highlight attribute="name" hit={hit} />
            </h1>
          </div>
        </article>
      </Link>
    );
  }
}

function SearchBar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isSearchBarOpen) {
        setIsSearchBarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchBarOpen]);
  return (
    <div>
      <div className=" flex flex-col justify-center items-center z-50 relative">
        <InstantSearch
          searchClient={searchClient}
          future={{
            preserveSharedStateOnUnmount: true,
          }}
          indexName="courses"
        >
          <div className=" flex relative">
            <SearchBox
              classNames={{
                form: "relative bg-neutral-900 border-[1px] border-purple-700 w-[480px] max-md:w-[380px] max-sm:w-[300px] max-[375px]:w-[260px] rounded-t-md rounded-b-sm ",
                input:
                  " w-[400px] max-lg:w-72 max-md:w-60 max-sm:w-38 max-[375px]:w-28 py-3 px-2 ml-12 bg-transparent rounded-t-xl outline-none placeholder-gray-400 text-gray-100 font-figtree max-[375px]:text-sm",
                submitIcon: "absolute top-3 left-2 mx-3",
                loadingIcon: " absolute top-4 right-5",
                resetIcon: "absolute top-2 right-1 ",
              }}
              placeholder="Enter keywords"
              submitIconComponent={({ classNames }) => (
                <div className={classNames.submitIcon}>
                  <RxMagnifyingGlass
                    className=" text-neutral-600 size-6 max-[375px]:size-5"
                  />
                </div>
              )}
              resetIconComponent={({ classNames }) => (
                <div className={classNames.resetIcon}></div>
              )}
              loadingIconComponent={({ classNames }) => (
                <div className={classNames.loadingIcon}></div>
              )}
              searchAsYouType={false}
              onFocus={() => setIsSearchBarOpen(true)}
            />
            <button
              className="absolute top-2.5 right-2 text-neutral-600 bg-[#a69caf00] py-0.5 px-1.5 rounded-xl border-[1px]
                  border-gray-500 max-[375px]:text-sm"
              onClick={(e) => setIsSearchBarOpen(false)}
            >
              esc
            </button>
          </div>
          {isSearchBarOpen && (
            <Hits
              className=" text-white bg-neutral-900 border-[1px] border-purple-700 w-[480px] max-md:w-[380px] max-sm:w-[300px] 
              max-[375px]:w-[260px] absolute top-14 searchBarResults"
              hitComponent={Hit}
            />
          )}
        </InstantSearch>
      </div>
    </div>
  );
}
export default SearchBar;
