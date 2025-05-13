type SquareData = {
  id: number
  selected: boolean
  disabled: boolean
}

type SquareProps = {
  data: SquareData
  onClick: () => void
}

export type { SquareData, SquareProps }