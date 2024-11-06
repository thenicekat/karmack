import { MMKV } from "react-native-mmkv";

export interface Item {
    id: string;
    description: string;
    karma: number;
    created_at: string;
}

const store = new MMKV({
    id: "karmack.store"
});

export const getItemsFromKarmaStore = (key: string) => {
    return JSON.parse(store.getString(key) || '[]')
}

export const addItemToKarmaStore = (item: Item, key: string) => {
    const items = JSON.parse(store.getString(key) || '[]')
    items.push(item)
    store.set(key, JSON.stringify(items))
    store.set(`${key}_score`, (store.getNumber(`${key}_score`) || 0) + item.karma)
}

export const removeItemFromKarmaStore = (id: string, key: string) => {
    const items = JSON.parse(store.getString(key) || '[]')
    const itemToBeRemoved = items.find((item: Item) => item.id === id)

    const newItems = items.filter((item: Item) => item.id !== id)
    store.set(key, JSON.stringify(newItems))
    store.set(`${key}_score`, (store.getNumber(`${key}_score`) || 0) - itemToBeRemoved.karma)
}

export const getGoodKarmaScore = () => {
    return store.getNumber('goodkarma_score') || 0
}

export const getBadKarmaScore = () => {
    return store.getNumber('badkarma_score') || 0
}