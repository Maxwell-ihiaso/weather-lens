'use client'

import React, { useEffect, useState } from 'react'
import { LocalNoteProps, NoteProps } from './interface'
import styles from './Note.module.css'
import useWeatherService from '@/hooks/useWeatherController'
import dayjs from 'dayjs'
import { useIcon } from '@/hooks/useIcon'

const Note: React.FC<NoteProps> = ({ city }) => {
    const [note, setNote] = useState<LocalNoteProps>({} as LocalNoteProps)
    const [showEditor, setShowEditor] = useState(false)

    const { localStoreDB, deleteNote, updateNote, getNotes } =
        useWeatherService()
    const { FontAwesomeIcon, faPenToSquare, faTrash } = useIcon()

    useEffect(() => {
        const local_note = getNotes(city)

        if (local_note) {
            return setNote(local_note)
        }
        setNote({} as LocalNoteProps)
    }, [city, localStoreDB])

    return (
        <section className={styles.note_section}>
            <div className={styles.catch_phrase}>
                <p>{`Found something fascination about ${city}? Add a note to save this memory`}</p>
                <div className={styles.button_container}>
                    {!note.note && (
                        <button
                            className={styles.button}
                            onClick={() => setShowEditor(true)}
                        >
                            Add Note
                        </button>
                    )}
                    {note.note && (
                        <button
                            className={styles.button}
                            onClick={() => setShowEditor(true)}
                        >
                            Edit Saved Note
                        </button>
                    )}
                </div>
            </div>
            {showEditor && (
                <section className={`${styles.note_section} ${styles.editor}`}>
                    <p className={styles.note_header}>
                        {note.note ? 'Edit Note' : 'New Note'}
                    </p>
                    <hr className={styles.divider} />
                    <textarea
                        className={styles.textbox}
                        placeholder={`Enter things to note about ${city}`}
                        rows={8}
                        value={note.note}
                        onChange={(e) =>
                            setNote((prev) => ({
                                ...prev,
                                note: e.target.value,
                            }))
                        }
                    ></textarea>
                    <div className={styles.button_container}>
                        {!note.note && (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowEditor(false)
                                    updateNote(city, note.note)
                                }}
                            >
                                Add
                            </button>
                        )}
                        {note.note && (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowEditor(false)
                                    updateNote(city, note.note)
                                }}
                            >
                                Update
                            </button>
                        )}
                        <button
                            onClick={() => setShowEditor(false)}
                            className={`${styles.button} ${styles.button_cancel}`}
                        >
                            Cancel
                        </button>
                    </div>
                </section>
            )}

            {!showEditor && note.note && (
                <section
                    className={`${`${styles.note_section}`} ${styles.editor}`}
                >
                    <p
                        className={`${styles.note_header} ${styles.margin_bottom_small}`}
                    >
                        Saved Note
                    </p>
                    <hr className={styles.divider} />
                    <p className={styles.date}>
                        {dayjs().format('ddd, D MMM, YYYY, hh:mm:A')}
                    </p>
                    <p className={styles.saved_notes}>{note.note}</p>
                    <div className={styles.note_action_container}>
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            className={styles.note_action}
                            onClick={() => setShowEditor(true)}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            className={styles.note_action}
                            onClick={() => deleteNote(city)}
                        />
                    </div>
                </section>
            )}
        </section>
    )
}

export default Note
