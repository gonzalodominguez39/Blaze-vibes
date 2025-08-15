import { useState } from "react"
import { useSearch } from "./hooks/useSearch"
import { useQuery } from "@tanstack/react-query"

type propsSearch={
  handleSearch: (query:string) => void
}

export const Search = ({handleSearch}:propsSearch) => {

const {search,handleChangeSearch} = useSearch()

  return (
    <div className="flex items-center space-x-2">
      <input className="bg-white p-2 h-8 w-80 rounded" placeholder="Buscar.." onChange={handleChangeSearch} type="text" />
      <button onClick={()=>handleSearch(search)} className="rounded-lg bg-fuchsia-900 hover:bg-fuchsia-800 cursor-pointer text-black p-2 transition-all duration-200 hover:scale-105">Search</button>
    </div>
  )
}
