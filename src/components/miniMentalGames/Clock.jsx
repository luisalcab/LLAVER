import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "src/juegosInfo/Build_reloj/mini3.loader.js",
    dataUrl: "src/juegosInfo/Build_reloj/mini3.data",
    frameworkUrl: "src/juegosInfo/Build_reloj/mini3.framework.js",
    codeUrl: "src/juegosInfo/Build_reloj/mini3.wasm",
});

const Clock = () => {
    useEffect(function () {
        unityContext.on("canvas", function (canvas) {
            canvas.width = 852;
            canvas.height = 480;
    })
    }, []);
    return (
        <div class="bg-white rounded-lg mx-auto mt-32 w-5/6">
            <Unity unityContext={unityContext} matchWebGLToCanvasSize={false}
            style={{height: "100%", width: "100%", border: "2px solid black", textAlign: "center"}} />
        </div>
    )
}

export default Clock;