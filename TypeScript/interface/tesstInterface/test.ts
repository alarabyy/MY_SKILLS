export interface color{

    getColor(): string;
    setColor(color: string): void;
    getBrand(): string;
}
export interface bmw extends color {
    brand: string;
    drive: () => void;
}

export interface bmh extends bmw {
    getEnginePower(): number;
    setEnginePower(power: number): void;
    getYear(): number;
    setYear(year: number): void;
    getMileage(): number;

}