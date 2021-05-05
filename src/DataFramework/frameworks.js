import * as yup from "yup";

export const charactersSchema = yup.object().shape({
    listofcharacters: yup.array().default(() => []),
    markedcharacters: yup.array().default(() => [])
});

export const localsSchema = yup.object().shape({
    characters: yup.object().default(() => charactersSchema.getDefault()),
});

export const stateSchema = yup.object().shape({
    locals: yup.object().default(() => localsSchema.getDefault())
});