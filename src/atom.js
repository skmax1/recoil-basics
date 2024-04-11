import { atom } from "recoil"

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