import { gql, useQuery } from "@apollo/client";
const FETCHBOARD = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoard() {
  const { data } = useQuery(FETCHBOARD);
  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el.number}>
            <div>{el.number}</div>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
          </div>
        ))}
      </div>
    </>
  );
}
