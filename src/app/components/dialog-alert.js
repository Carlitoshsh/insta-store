import { useEffect, useRef } from "react";

export default function SimpleDialog({ text }) {
    const ref = useRef();

    useEffect(() => {
        ref.current?.showModal();
    }, [])

    return (
        <dialog ref={ref}>
            <span>{text}</span>
            <button type="submit" onClick={() => ref.current?.close()}>Ok</button>
        </dialog>
    );
}
