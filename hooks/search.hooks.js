import { useState } from "react"

const useSearch = (fields) => {
  const [searchData, setSearchData] = useState(undefined)

  const search = (query, data) => {
    let _data = data
    if (!query) {
      setSearchData(undefined)
    }
    if (fields.length === 1) {
      _data = _data.filter((d) => {
        return d[fields[0]].includes(query)
      })
    }
    else if (fields.length === 2) {
      _data = _data.filter((d) => d[fields[0]].includes(query) || d[fields[1]].includes(query))

    }

    if (_data.length > 0) {
      setSearchData(_data)
    } else {
      setSearchData([])
    }
  }

  return {
    search,
    searchData,
  }
}

export { useSearch }