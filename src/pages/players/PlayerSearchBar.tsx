import React from "react"
const PlayerSearchBar = ({ filterPosition, setFilterPosition }) => {

  const positionTypes = [
    "QB",
    "RB",
    "WR",
    "TE",
    "K",
    "DST"
  ]
	const handleClick = (e) => {
    e.preventDefault()
		setFilterPosition(e.target.id)
	}

  const clearFilterPosition = (e) => {
    e.preventDefault()
    setFilterPosition(() => '')
  }

  console.log(`Filter Position: ${filterPosition}`)

	return (
		<div>
			<p>Filter by Position:</p>
      {positionTypes.map((position) => (
        <button
          className={`$isHighlighted`}
          id={position}
          onClick={handleClick}
        >
          {position}
        </button>
      ))}
      <button onClick={clearFilterPosition}>Clear Filter</button>
		</div>
	)
}

export default PlayerSearchBar
