import { IResumen } from "../interfaces/IResumen"
import { CustomModal } from "./CustomModal"

interface Props {
  resumes: IResumen[]
}

export const ResumeList = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {
        props.resumes.map((r) => (
          <CustomModal title={r.title} description={r.descriptcion} alt={r.title} />
        ))}
    </div>
  )
}

