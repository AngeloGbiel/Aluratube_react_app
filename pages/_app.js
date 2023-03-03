import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset'
import ColorModeProvider,{ColorModeContext} from '../src/components/Menu/components/ColorMode';

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = useContext(ColorModeContext) // erro, pois estou chamando o colormodecontext antes de passar um valor para ele na linha 26
    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
    )
}
export default function _App(props){
    return(
        <ProviderWrapper> {/*Providers que precisam ser resolvidos primeiro */}
            <MyApp {...props} /> {/*quando o MyApp for carregado, os valores já estaram definidos*/}
        </ProviderWrapper>
    )
}