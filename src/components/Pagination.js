import React, { useState } from "react";
import styled from "styled-components";


function Pagination ( {total,limit,page,plimit,setPage} ) {

    const [pPage, setPPage] = useState(); 
    const numPages = Math.ceil(total/limit);
    const numPpages = Math.ceil(numPages/plimit);
    const pOffset = (pPage-1) * plimit;

    return(
        <>
        <Nav>
            <Button onClick={()=>setPPage(1)} disabled={pPage===1}>
                처음
            </Button>
            <Button onClick={()=>setPPage(pPage-1)} disabled={pPage===1}>
                &lt;
            </Button>
            {Array(numPages).fill().map((_,i)=>(
                <Button
                    key={i+1}
                    onClick={()=>setPage(i+1)}
                    aria-current={page===(i+1)?"page":null}
                >
                    {i+1}
                </Button>
            ))}
            <Button onClick={()=>setPPage(pPage+1)} disabled={pPage===numPpages}>
                &gt;
            </Button>
            <Button onClick={()=>setPPage(numPpages)} disabled={pPage===numPpages}>
                끝
            </Button>
        </Nav>
        </>
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