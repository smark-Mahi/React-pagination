import React, { useState } from 'react'
import JsonData from './data.json'
import ReactPaginate from 'react-paginate'
import Styles from './Pagination.module.css'
const Practicepaginate = () => {
    const [users,setusers]=useState(JsonData.slice(0,100))
    const [pagenumber,setpagenumber]=useState(0)
    const usersperpage=20
    const pagesvisited=pagenumber * usersperpage
    const displayusers=users.slice(pagesvisited,pagesvisited + usersperpage)
    .map(user=>{
        return(
        <div key={user.id} className={Styles.user}>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <h3>{user.password}</h3>
      </div>
        )
    })
    const pageCount=Math.ceil(users.length/usersperpage)
    const changepage=({selected})=>{
        setpagenumber(selected)
    }

  return (
    <div>
      <h3>{displayusers}</h3>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changepage}
        containerClassName={Styles.paginationBttns}
        previousClassName={'previousbttn'}
        nextLinkClassName={'nextbttn'}
        activeClassName={Styles.paginationActive}
        disabledClassName={Styles.paginationDisabled}
      />
    </div>
  )
}

export default Practicepaginate
