import React from 'react'
import DropdownComponent from '../reusables/DropdownComponent'

export default function DealsDrop() {


    const dealsList = [
        {
            title: "Mens deals"

        },
        {
            title: "Womens deals"

        }
    ]
    return <DropdownComponent title="Deals" dropList={dealsList} />

}
