import { MouseEvent, RefObject, useEffect } from 'react';
import { IListener } from '../interfaces/interfaces';

/**
 * @function useOnClickOutside - вызывает коллбэк, если событие
 * [mousedown] происходит не на элементе с ссылкой [ref].
 * @param {RefObject<HTMLDivElement>} ref - ссылка на элемент.
 * @param {() => void} handler - коллбэк.
 * @returns {void}
 */
const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: () => void): void => {
    useEffect(() => {
        const listener = (event: MouseEvent): void => {
            if (!ref.current || ref.current.contains(event.target as HTMLDivElement)) {
                return;
            }
            handler();
        };
        document.addEventListener('mousedown', listener as unknown as IListener);
        return () => {
            document.removeEventListener('mousedown', listener as unknown as IListener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;
