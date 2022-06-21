import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import ReactPaginate from "react-paginate";
import useData from "../hooks/useData";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const PER_PAGE = 4;

const TilesContainerPager = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setpageCount] = useState(0);
    const offset = currentPage * PER_PAGE;
    const {data} = useData();

    useEffect(() => {
        if (!data) {
         return;
        }
        setpageCount(Math.ceil(data?.length / PER_PAGE));
    }, [data]);

    const currentPageData = data?.slice(offset, offset + PER_PAGE)
    .map((data, index) => 
        <Tile
            key= {index}
            title={data.title}
            description={data.description}
            imagePath={data.imagePath}
        />
    );

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return(
        <div className="gridWrapper">
        <div className="gridWrapper__tilesContainer">
            <LazyLoadComponent>
            {currentPageData}
            </LazyLoadComponent>
        </div>
        <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"gridWrapper__pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
        </div>
    )
}

export default TilesContainerPager;