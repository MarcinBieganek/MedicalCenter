import { v4 } from "uuid"
import IDoctor from "./types/IDoctor";

let doctors: IDoctor[] = [
    {
        id: v4(),
        firstName: "Lekarz 1",
        lastName: "Lekarski",
        spec: "Rodzinny",
    },
    {
        id: v4(),
        firstName: "Adam",
        lastName: "Lekarz",
        spec: "Rodzinny",
    },
    {
        id: v4(),
        firstName: "Tomek",
        lastName: "Kowalski",
        spec: "Stomatolog",
    }
];

export function getDoctors(): IDoctor[] {
    return doctors;
}

export function getDoctor(id: string | undefined): IDoctor | undefined {
    return doctors.find((doctor) => doctor.id === id);
}