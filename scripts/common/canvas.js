export const canvas = document.getElementById('canvas');
export const context = canvas.getContext('2d');
export const compStyle = window.getComputedStyle(canvas);
export const colors = compStyle.getPropertyValue('--colors').trim().split(' ');

export function addResizeEventListener(listener) {
    if (!listener) {
        listener = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }
    window.addEventListener('resize', listener);
    listener();
}
