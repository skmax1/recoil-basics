import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 104 //default value
});

export const messagingAtom =atom({
    key: "messgaingAtom",
    default : 0
});

export const notificationAtom = atom({
    key: "notificaionAtom",
    default: 12
});

export const jobsAtom = atom({
    key: "jobAtom",
    default: 1
})

//selector can be derived from atoms
export const totalNotificationSelector = selector({
    key: "totalNotificationCount",
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const notificaionAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        const jobsAtomCount = get(jobsAtom);
        return networkAtomCount + jobsAtomCount + notificaionAtomCount + messagingAtomCount

    }
})