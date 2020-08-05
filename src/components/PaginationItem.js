import React from 'react'
import PagWrapper from './styles/PagWrapper'
import Pagination from '@material-ui/lab/Pagination'

export default function PaginationItem({ page, count, setPage }) {
  return (
    <PagWrapper>
      <Pagination
        style={{ justifyContent: 'center' }}
        count={count}
        page={page}
        onChange={setPage}
      />
    </PagWrapper>
  )
}
