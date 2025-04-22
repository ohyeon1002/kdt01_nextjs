import React, { useEffect } from 'react'

export default function SearchBox(props) {
    useEffect(() => {
        props.ref.current.focus();
    }, []);
    return (
        <>
            <input type={props.type} ref={props.ref} onFocus={() => { props.ref.current.value = ''; }} onKeyDown={(e) => {
                                                                                                                    if (e.key == 'Enter') {
                                                                                                                        e.preventDefault();
                                                                                                                        props.function();
                                                                                                                        }
                                                                                                                    }
                                                                                                            }
                placeholder={props.placeholder} className={props.cn} />
            <button type="button" onClick={props.function} className="border rounded-lg p-2 text-center bg-blue-600 hover:bg-blue-700 text-white" >
                검색
            </button>
        </>
    )
}
