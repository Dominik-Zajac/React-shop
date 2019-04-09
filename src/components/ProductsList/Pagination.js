import React from 'react';
import { 
    Pagination, 
    PaginationItem, 
    PaginationLink 
} from 'reactstrap';

const PageNumbering = (props) => {
    const {currentPage, pageCount, pageSize, click} = props;
    
    return (
        <div className='pagination'>
            <Pagination>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        onClick={e => click(e, currentPage - 1)}
                        previous
                    />
                </PaginationItem>
                {[...Array(pageCount)].map((page, index) => 
                    <PaginationItem 
                        active={index === currentPage} 
                        key={index}
                    >
                        <PaginationLink onClick={e => click(e, index)}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem disabled={currentPage >= pageCount - 1}>  
                    <PaginationLink
                        onClick={e => click(e, currentPage + 1)}
                        next    
                    />  
                </PaginationItem> 
            </Pagination>
        </div>
    )
}

export default PageNumbering;