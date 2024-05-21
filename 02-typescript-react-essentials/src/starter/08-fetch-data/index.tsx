import { useQuery } from "@tanstack/react-query"
import { fetchtours } from "./types"

function Component() {
  const {
    data: tours,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchtours,
  })

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p className="mb-1" key={tour.id}>
            {tour.name}
          </p>
        )
      })}
    </div>
  )
}
export default Component
