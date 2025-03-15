import React from 'react'
import DropdownComponent from '../reusables/DropdownComponent'

export default function CategoriesDrop() {

    const catList = [
        {
            header: "All categories"

        },
        {
            title: "Mens"

        },
        {
            title: "Womens"

        }
    ]

    return <DropdownComponent title={"Categories"} dropList={catList} />

}
