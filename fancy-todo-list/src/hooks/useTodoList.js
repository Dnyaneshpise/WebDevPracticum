import useSWR from 'swr';

import { APIs, fetcher, putter } from '../utils.js';

export function useTodoList(currentList) {
  const { data, mutate } = useSWR(
    () => currentList && { url: APIs.TodoList, id: currentList },
    fetcher
  );

  return {
    data,
    async newItem(newItemName) {
      const newItemsData = {
        name: newItemName,
        checked: false,
        id: crypto.randomUUID(),
      };
      return await mutate(
        await putter({
          url: APIs.TodoList,
          id: currentList,
          name: newItemName,
        }),
        {
          populateCache: false, // because our putter doesn't return the new item so we want to refetch it instead
          optimisticData: oldData => ({
            ...oldData,
            items: [...oldData.items, newItemsData],
          }),
        }
      );
    },
    async deleteItem(itemToDelete) {
      return await mutate(
        await putter({
          url: APIs.TodoListDelete,
          id: itemToDelete,
        }),
        {
          populateCache: false, // because our putter doesn't return the new item so we want to refetch it instead
          optimisticData: oldData => ({
            ...oldData,
            items: oldData.items.filter(({ id }) => id !== itemToDelete),
          }),
        }
      );
    },
    async toggleChecked(itemToToggle) {
      return await mutate(
        await putter({
          url: APIs.TodoListUpdate,
          id: itemToToggle,
          checked: !data.items.find(({ id }) => id === itemToToggle).checked,
        }),
        {
          populateCache: false,
          optimisticData: oldData => {
            const oldItem = oldData.items.find(({ id }) => id === itemToToggle);
            return {
              ...oldData,
              items: [
                ...oldData.items.slice(
                  0,
                  oldData.items.findIndex(({ id }) => id === itemToToggle)
                ),
                { ...oldItem, checked: !oldItem.checked },
                ...oldData.items.slice(
                  oldData.items.findIndex(({ id }) => id === itemToToggle) + 1
                ),
              ],
            };
          },
        }
      );
    },
    async updateItem(itemToToUpdate, newItemName) {
      return await mutate(
        await putter({
          url: APIs.TodoListUpdate,
          id: itemToToUpdate,
          name: newItemName,
        }),
        {
          populateCache: false,
          optimisticData: oldData => {
            const oldItem = oldData.items.find(
              ({ id }) => id === itemToToUpdate
            );
            return {
              ...oldData,
              items: [
                ...oldData.items.slice(
                  0,
                  oldData.items.findIndex(({ id }) => id === itemToToUpdate)
                ),
                { ...oldItem, name: newItemName },
                ...oldData.items.slice(
                  oldData.items.findIndex(({ id }) => id === itemToToUpdate) + 1
                ),
              ],
            };
          },
        }
      );
    },
  };
}
