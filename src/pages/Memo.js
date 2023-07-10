import React from "react";
import { useParams } from "react-router-dom";

const Memo = ( props ) => {
    const memoId = useParams().memoId;

    return (
        <main className="min">
            <h3>{ memoId }번 개인메모장 상세 내용입니다.</h3>
        </main>
    );
};

export default Memo;