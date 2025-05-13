type SquareData = {
  id: number
  selected: boolean
  disabled: boolean
}

type SquareProps = {
  data: SquareData
  onClick: () => void
}

type MenuProps = {
  visible: boolean;
};

export type { SquareData, SquareProps, MenuProps }