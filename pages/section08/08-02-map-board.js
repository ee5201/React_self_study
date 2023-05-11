import { gql, useQuery } from "@apollo/client"



const FETCHBOARD = gql`
  query fetchBoards{
    fetchBoards{
      number
      writer
      contents
    }
  }
`

export default function MapBoard () {
  const {data}= useQuery(FETCHBOARD)

  return(
    <>
    <div>
      {data?.fetchBoards.map((el)=> (
        <div>
          <span>
              <input type="checkbox"/>
          </span>
          <span>{el.writer}</span>
        </div>
      ))}

    </div>

    </>
  )
}