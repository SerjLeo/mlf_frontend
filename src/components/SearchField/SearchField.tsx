import React, {ChangeEvent, useState} from 'react'
import {InputAdornment, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchFieldProps = {
	onChange: (search: string) => void | Promise<void>
    placeholder?: string
	initialValue?: string
	inputProps?: Record<string, unknown>
}

const SearchField: React.FC<SearchFieldProps> = React.memo(({ onChange, initialValue = '', placeholder = 'Search...', inputProps = {} }) => {
	const [ search, setSearch ] = useState(initialValue)
	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
		onChange(e.target.value)
	}

	return (
		<TextField
			placeholder={placeholder}
			value={search}
			onChange={onSearchChange}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				)
			}}
			{...inputProps}
		/>
	)
})

export default SearchField
