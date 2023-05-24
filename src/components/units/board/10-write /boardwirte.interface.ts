import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriterContainer{
  isEdit:Boolean
  data?: string
}

export interface IMyvariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}
export interface IBoardWriterPresenter {
  onchangeWriter:(event: ChangeEvent<HTMLInputElement>) => void
  onCHangetitle:(event: ChangeEvent<HTMLInputElement>) => void
  onChangecontents:(event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit:(event: MouseEvent<HTMLButtonElement>) => void
  onClickupdate:(event: ChangeEvent<HTMLInputElement>) => void
  isEdit:boolean
  data?:any
}