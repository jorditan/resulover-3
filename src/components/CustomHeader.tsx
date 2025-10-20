interface Props {
  header: string;
  description: string;
}

export const CustomHeader = (props: Props) => {
  return (
    <div className="flex gap-2 flex-col items-center">
      <h1 className="text-3xl font-bold text-center">{props.header}</h1>
      <p className="2/4 text-center">{props.description}</p>
    </div>
  )
}
