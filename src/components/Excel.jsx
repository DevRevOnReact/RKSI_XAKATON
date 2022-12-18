import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import {useState} from "react";

import Preview from 'preview-office-docs'

const Excel = () => {
    const [initialData, setInitialData] = useState(undefined);
    const [currentSheet, setCurrentSheet] = useState({});

    const handleUpload = (event) => {
        const file = event.target.files[0];

        readFile(file)
            .then((readedData) => setInitialData(readedData))
            .catch((error) => console.error(error));
    };

    const save = () => {
        const result = generateObjects(currentSheet);
    };

    return (
        <>
            <Preview />
        </>
    );
}