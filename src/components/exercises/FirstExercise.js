import React, { useEffect, useState } from 'react';
import { buildData } from '../../helpers/buildDataTables';
import { Table } from '../ui/table/Table';
import first from '../../resources/img/first.JPG'
import { useForm } from '../../hooks/useForm';
import { checkWord } from '../../helpers/checkWord';
export const FirstExercise = () => {

    const initial = 0;
    const final = [3]
    const dfa = [
        {
            'a': 0,
            'b': 1
        },
        {
            'a': 0,
            'b': 2
        },
        {
            'a': 4,
            'b': 3
        },
        {
            'a': 4,
            'b': 3
        },
        {
            'a': 4,
            'b': 3
        }
    ]

    const data = [
        {
            state: 'q0',
            symbol1: 'q0',
            symbol2: 'q0, q1'
        },

        {
            state: 'q0 q1',
            symbol1: 'q0',
            symbol2: 'q0, q1, q2'
        },

        {
            state: 'q0 q1 q2',
            symbol1: 'q0, q2',
            symbol2: 'q0, q1, q2, q3'
        },

        {
            state: 'q0 q1 q2 q3',
            symbol1: 'q0, q2',
            symbol2: 'q0, q1, q2, q3'
        },

        {
            state: 'q0 q2',
            symbol1: 'q0, q2',
            symbol2: 'q0, q1, q2, q3'
        },
    ]



    const headers = [{
        title: "states",
        textAlign: 'center'
    },
    {
        title: "a",
        textAlign: 'center'
    },
    {
        title: "b",
        textAlign: 'center'
    },
    ];

    const [dataShow, setDataShow] = useState([])


    const [formValues, handleInputChange, reset] = useForm({
        word: ''
    });
    const { word } = formValues;

    const handleInput = (e) => {
        e.preventDefault();
        checkWord(initial, final, dfa, word)
        reset()

    }
    const generateData = () => {
        const dataToShow = [];

        data.forEach(({ state, symbol1, symbol2 }) => {

            const dataBuilded = buildData(state, symbol1, symbol2)

            dataToShow.push(dataBuilded)

        });

        setDataShow(dataToShow)
    }

    useEffect(() => {
        generateData()
    }, []);


    return (
        <>
            <div className='container'>
                <h2 className='title'>First Exercise</h2>

                <div className='container__table'>

                    <Table
                        headers={headers}
                        data={dataShow}
                        sizesColumns={[20, 40, 40]}
                    />
                </div>
                <div className='input-img'>
                    <form onSubmit={handleInput}>
                    <input
                        className='input'
                        placeholder="Check if the word is valid"
                        name="word"
                        autoComplete="off"
                        value={word}
                        onChange={handleInputChange}
                    />
                    </form>
                    <img className='img' src={first} />
                </div>
            </div>
        </>
    )

};