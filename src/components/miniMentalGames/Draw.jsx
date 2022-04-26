import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "src/juegosInfo/Build_Draw/mini1.loader.js",
    dataUrl: "src/juegosInfo/Build_Draw/mini1.data",
    frameworkUrl: "src/juegosInfo/Build_Draw/mini1.framework.js",
    codeUrl: "src/juegosInfo/Build_Draw/mini1.wasm",
    webglContextAttributes: {
        preserveDrawingBuffer: true,
    },
});

const Draw = () => {
    /* Render la imagen*/
    /*------------------------------------------------------*/
    function debugBase64(base64URL){
        var win = window.open();
        win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }
    function handleOnClickTakeScreenshot() {
        const data = unityContext.takeScreenshot("image/jpeg", 1.0);
        if (data !== null) {
            debugBase64(data);
        }
    }
    /* -------------------------------------------------- */

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
            <button onClick={handleOnClickTakeScreenshot}>Take Screenshot</button>
        </div>
    )
}

export default Draw;