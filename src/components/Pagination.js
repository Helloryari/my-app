import React from "react";
import styled from "styled-components";


const Pagination = ( { currentPage,maxVisiblePages,totalPages,onPageChange } ) => {

    // Calculate the page numbers for pagination
    const getPageNumbers = () => {
        const pageNumbers = [];
        const tempPageValue = Math.floor((currentPage-1) / maxVisiblePages);

        let startPage = 1 + (maxVisiblePages * tempPageValue);
        if (startPage < 1) startPage = 1;

        let endPage = startPage + maxVisiblePages - 1;
        if (endPage > totalPages) endPage = totalPages;

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = endPage - maxVisiblePages + 1;
            if (startPage < 1) startPage = 1;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }

    const pageNumbers = getPageNumbers();

    const getPageOfPages = () => {
        let pageOfPages = Math.ceil(currentPage / maxVisiblePages);
        return pageOfPages;
    }

    return(
        <Nav>
            <Button disabled={getPageOfPages() === 1} onClick={() => onPageChange(1)}>
                처음
            </Button>
            <Button disabled={getPageOfPages() === 1} onClick={() => onPageChange(pageNumbers[0] - maxVisiblePages)}>
                &lt;
            </Button>
            {pageNumbers.map((page) => (
                <Button 
                    key={page} 
                    onClick={() => onPageChange(page)} 
                    aria-current={currentPage === page ? "page" : null}
                >
                    {page}
                </Button>
            ))}
            <Button disabled={getPageOfPages() === Math.ceil(totalPages / maxVisiblePages)} onClick={() => onPageChange(pageNumbers[0] + maxVisiblePages)}>
                &gt;
            </Button>
            <Button disabled={getPageOfPages() === Math.ceil(totalPages / maxVisiblePages)} onClick={() => onPageChange(totalPages)}>
                끝
            </Button>
       </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: black;
    color: white;
    font-size: 1rem;

    &:hover {
        background: tomato;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &[disabled] {
        background: grey;
        cursor: revert;
        transform: revert;
    }

    &[aria-current] {
        background: deeppink;
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`;

export default Pagination;