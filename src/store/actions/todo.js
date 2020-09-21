import { ACTION_TYPES } from '../../constants/action-type';

export const onLoad = todos => ({ type: ACTION_TYPES.load, todos });
export const onCreate = (name, category) => ({ 
  type: ACTION_TYPES.create, 
  name,
  category
});
export const onRemove = id => ({ type: ACTION_TYPES.remove, id });
export const onUpdate = values => ({ type: ACTION_TYPES.update, values });
export const onCompleteAll = () => ({ type: ACTION_TYPES.completeAll });
export const onClearCompleted = () => ({ type: ACTION_TYPES.clearCompleted });