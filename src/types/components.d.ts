import { Dispatch, SetStateAction } from 'react';

export type TSeachBarComponent = {
    addMode: boolean;
    setAddMode: Dispatch<SetStateAction<boolean>>;
}
