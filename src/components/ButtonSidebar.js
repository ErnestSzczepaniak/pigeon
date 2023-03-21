
import './ButtonSidebar.css'

const svgClear = `
    <svg class="button-sidebar-icon" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 6H10C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V38C6 39.0609 6.42143 40.0783 7.17157 40.8284C7.92172 41.5786 8.93913 42 10 42H38C39.0609 42 40.0783 41.5786 40.8284 40.8284C41.5786 40.0783 42 39.0609 42 38V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6ZM38 38H10V10H38V38ZM34 16.8L26.8 24L34 31.2L31.2 34L24 26.8L16.8 34L14 31.2L21.2 24L14 16.8L16.8 14L24 21.2L31.2 14L34 16.8Z" fill="currentcolor"/>
    </svg>
`

const svgPrint = `
    <svg class="button-sidebar-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_109_119)">
            <path d="M33.8 6C34.3421 5.99972 34.8652 6.19961 35.269 6.56133C35.6728 6.92305 35.9289 7.42112 35.988 7.96L36 8.2V14H38C39.5304 13.9999 41.003 14.5847 42.1165 15.6346C43.23 16.6845 43.9002 18.1202 43.99 19.648L44 20V34C44.0003 35.0092 43.6192 35.9811 42.933 36.7211C42.2468 37.4611 41.3063 37.9143 40.3 37.99L40 38H36V41.8C36.0003 42.3421 35.8004 42.8652 35.4387 43.269C35.0769 43.6728 34.5789 43.9289 34.04 43.988L33.8 44H14.2C13.6579 44.0003 13.1348 43.8004 12.731 43.4387C12.3272 43.0769 12.0711 42.5789 12.012 42.04L12 41.8V38H8C6.99085 38.0003 6.01887 37.6192 5.2789 36.933C4.53894 36.2468 4.08569 35.3063 4.01 34.3L4 34V20C3.99991 18.4696 4.58465 16.997 5.63457 15.8835C6.68448 14.77 8.12021 14.0998 9.648 14.01L10 14H12V8.2C11.9997 7.65788 12.1996 7.13475 12.5613 6.73096C12.923 6.32716 13.4211 6.07114 13.96 6.012L14.2 6H33.8ZM32 32H16V40H32V32ZM38 18H10C9.51013 18.0001 9.03733 18.1799 8.67126 18.5054C8.30519 18.8309 8.07131 19.2795 8.014 19.766L8 20V34H12V30.2C11.9997 29.6579 12.1996 29.1348 12.5613 28.731C12.923 28.3272 13.4211 28.0711 13.96 28.012L14.2 28H33.8C34.3421 27.9997 34.8652 28.1996 35.269 28.5613C35.6728 28.923 35.9289 29.4211 35.988 29.96L36 30.2V34H40V20C40 19.4696 39.7893 18.9609 39.4142 18.5858C39.0391 18.2107 38.5304 18 38 18ZM34 20C34.5098 20.0006 35.0001 20.1958 35.3707 20.5457C35.7414 20.8956 35.9645 21.3739 35.9943 21.8828C36.0242 22.3917 35.8587 22.8928 35.5315 23.2837C35.2043 23.6746 34.7402 23.9258 34.234 23.986L34 24H30C29.4902 23.9994 28.9999 23.8042 28.6293 23.4543C28.2586 23.1044 28.0355 22.6261 28.0057 22.1172C27.9758 21.6083 28.1413 21.1072 28.4685 20.7163C28.7957 20.3254 29.2598 20.0742 29.766 20.014L30 20H34ZM32 10H16V14H32V10Z" fill="currentcolor"/>
        </g>
        <defs>
        <clipPath id="clip0_109_119">
            <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
    </svg>
`

const svgSwap = `
    <svg class="button-sidebar-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.18 24L29.18 16H22V12H36V26H32V18.82L24 26.82V32H40V8H16V24H21.18ZM44 4V36H24V44H4V24H12V4H44ZM20 28H8V40H20V28Z" fill="currentcolor"/>
    </svg>
`

export default function ButtonSidebar(props) {

    const chooseSvg = (name) => {
        switch (name) {
            case 'print':
                return svgPrint
            case 'clear':
                return svgClear
            case 'swap':
                return svgSwap
            default:
                return svgClear
        }
    }

    const chooseLabel = (name) => {
        switch (name) {
            case 'print':
                return 'Drukuj'
            case 'clear':
                return 'Wyczyść'
            case 'swap':
                return 'Zamień'
            default:
                return 'Clear'
        }
    }

    return (
        <div className="button-sidebar" onClick={props.onClick}>
            <div className="button-sidebar-icon" dangerouslySetInnerHTML={{__html: chooseSvg(props.name)}}></div>
            <div className="button-sidebar-label">{chooseLabel(props.name)}</div>
        </div>
    )
}