export function getRandomItemWithoutImmediateRepeat<T extends { id: string }>(
  items: T[],
  lastItemId?: string | null,
) {
  if (items.length === 0) {
    return null
  }

  const availableItems = lastItemId ? items.filter((item) => item.id !== lastItemId) : items

  if (availableItems.length === 0) {
    return items[0]
  }

  const index = Math.floor(Math.random() * availableItems.length)
  return availableItems[index]
}
