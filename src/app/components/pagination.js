import { useState } from "react";

export default function Pagination({ limit, size, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(size / limit);

    const onPageChanged = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    }

    const previousPage = () => {
        let cPage = currentPage - 1;
        onPageChanged(cPage);
    }

    const nextPage = () => {
        let cPage = currentPage + 1;
        onPageChanged(cPage);
    }

    return (
        <div className="flex-center small-container">
            <button onClick={() => onPageChanged(1)} disabled={currentPage == 1}>First</button>
            <button onClick={previousPage} disabled={currentPage == 1}>&lt;</button>
            {currentPage} of {totalPages}
            <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
            <button onClick={() => onPageChanged(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
    );

}