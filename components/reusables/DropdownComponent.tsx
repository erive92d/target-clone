type DropDownProps = {
    title: string
    dropList: any[]
}


export default function DropdownComponent({ title, dropList }: DropDownProps) {
    return (
        <div className="dropdown relative ">
            <div tabIndex={0} role="button" className="">
                {title}
                <i className="fa-solid fa-chevron-down opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs mx-1"></i>
            </div>
            <ul tabIndex={0} className="absolute divide-y-2 top-10 dropdown-content menu bg-gray-100 z-1 w-52 p-2 shadow-sm text-left">
                {dropList.map((list, index) => (
                    <li key={index}>
                        <h1 className="text-lg font-bold ">
                            {list.header}
                        </h1>
                        {list.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
