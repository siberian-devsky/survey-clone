type SquareData = {
  id: number
  selected: boolean
  disabled: boolean
}

type SquareProps = {
  data: SquareData
  password: string
  onClick: () => void
}

type MenuProps = {
  visible: boolean;
  resetCallback: () => void;
  menuLockCallback: () => void;
  menuUnlockCallback: () => void;
};

export type { SquareData, SquareProps, MenuProps }