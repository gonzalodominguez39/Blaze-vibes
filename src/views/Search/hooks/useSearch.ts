import { useState } from 'react'

export const useSearch = () => {
    const [search,setSearch]= useState<string>("")
    const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }

    
    return {search,handleChangeSearch}
}
