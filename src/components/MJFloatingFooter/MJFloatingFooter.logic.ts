import { ShaderDisplacementGenerator, fragmentShaders } from "./../../utils/shader";
import { displacementMap, polarDisplacementMap, prominentDisplacementMap } from "./../../utils/map";

export const generateShaderDisplacementMap = (width: number, height: number): string => {
    const generator = new ShaderDisplacementGenerator({
        width,
        height,
        fragment: fragmentShaders.liquidGlass,
    });

    const dataUrl = generator.updateShader()
    generator.destroy()

    return dataUrl
};

export const getMap = (mode: "standard" | "polar" | "prominent" | "shader", shaderMapUrl?: string) => {
    switch (mode) {
        case "standard":
            return displacementMap
        case "polar":
            return polarDisplacementMap
        case "prominent":
            return prominentDisplacementMap
        case "shader":
            return shaderMapUrl || displacementMap
        default:
        throw new Error(`Invalid mode: ${mode}`)
    }
};
