import { ActionType } from './root-reducer';

  const updateName = (name: string) => ({ type: ActionType.UpdateName, payload: { name } });

  const updateAddress = (address: string) =>({ type: ActionType.UpdateAddress, payload: { address } });

  const deleteName = () =>({ type: ActionType.DeleteName, payload: {} });

  const deleteAddress = () =>({ type: ActionType.DeleteAddress, payload: {} });

  export {updateName, updateAddress, deleteName, deleteAddress}