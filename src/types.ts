type VaultStatus = 'locked' | 'unlocked' | 'error'

type SquareProps = {
  id: number
  selected: boolean
  disabled: boolean
  vaultStatus: VaultStatus
  handleClick: () => void
}

type MenuProps = {
  visible: boolean;
  resetCallback: () => void;
  menuLockCallback: () => void;
  menuUnlockCallback: () => void;
};

export type { SquareProps, MenuProps, VaultStatus }