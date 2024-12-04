import { existsSync, unlinkSync, appendFileSync } from 'fs';

const MN = 10000;
const MS = 1000;
const OFFS = 1;

const getDimension = (maxSize = MS, offset = OFFS) => Math.floor(Math.random() * maxSize) + offset;

const getNumber = (maxNumber = MN) => {
    let num = (Math.random() < 0.3) ? -1 : 1;
    num *= Math.floor(Math.random() * maxNumber);
    num *= (Math.random() < 0.0005) ? 0 : 1;
    return num;
}

const createData = (maxNumber = MN, maxSize = MS, offset = OFFS) => {
    if (existsSync("data.txt")) {
        unlinkSync("data.txt");
    }
    const dim = getDimension(maxSize, offset)
    for (let i = 0; i < dim; i++)
        appendFileSync("data.txt", getNumber(maxNumber).toString() + '\n');
};

const deleteData = () => {
    if (existsSync("data.txt")) {
        unlinkSync("data.txt");
    }
};

const saveNumber = (num) => {
    appendFileSync("data.txt", num.toString() + '\n');
};

export { getDimension, getNumber, createData, saveNumber };