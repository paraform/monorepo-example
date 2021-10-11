/// <reference types="react" />
import { CSS } from "../../stitches.config";
export declare const button: import("@stitches/react/types/styled-component").CssComponent<never, {
    constrained?: boolean | "true" | "false" | undefined;
}, {
    bp1: "(max-width: 600px)";
}, import("@stitches/react/types/css-util").CSS<{
    bp1: "(max-width: 600px)";
}, {
    colors: {
        black: string;
        white: string;
        hiContrast: string;
        loContrast: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
declare const Button: import("react").ForwardRefExoticComponent<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & import("@stitches/react/types/styled-component").TransformProps<{
    constrained?: boolean | "true" | "false" | undefined;
}, {
    bp1: "(max-width: 600px)";
}> & {
    css?: CSS | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
