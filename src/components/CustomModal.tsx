interface Props {
  title: string;
  badges?: string[],
  description: string;
  image?: string;
  alt: string;
}

export const CustomModal = (props: Props) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.image}
            alt={props.alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            {props.badges?.map((b) => (
              <div key={b} className="badge badge-outline">{b}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
