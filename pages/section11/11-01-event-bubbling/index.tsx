import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

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

export default function EventBubling(): JSX.Element {
  const { data } = useQuery(FETCHBOARD);
  console.log(data?.fetchBoards);

  const onclickAert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  return (
    <div>
      <div>dkdk</div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.id} id={el.writer} onClick={onclickAert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
