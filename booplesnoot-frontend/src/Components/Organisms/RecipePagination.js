import React from 'react';
import Pagination from 'rc-pagination';
import en_GB from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';
import './RecipePagination.css';

const RecipePagination = ({offset, number, totalResults, ...props}) => {

    const currentPage = (offset / number) + 1;


    return (
        <Pagination
            current={currentPage}
            total={totalResults}
            pageSize={number}
            locale={en_GB}
            showTitle={false}
            {...props}
        />
    )
}

export default RecipePagination
