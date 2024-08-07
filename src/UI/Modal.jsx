import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, open, className='', onClose}) {
    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        }
        return () => dialogRef.current.close();
    }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`${className} modal`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
