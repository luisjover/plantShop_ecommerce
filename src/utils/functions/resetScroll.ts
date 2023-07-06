export const resetScroll = () => {
    const body = document.querySelector("html") as HTMLElement
    body.scrollTop = 0
}