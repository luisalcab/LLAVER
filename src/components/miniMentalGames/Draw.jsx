import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const Draw = () => {

    const unityContext = new UnityContext({
        loaderUrl: "src/juegosInfo/Build_Draw/mini1.loader.js",
        dataUrl: "src/juegosInfo/Build_Draw/mini1.data",
        frameworkUrl: "src/juegosInfo/Build_Draw/mini1.framework.js",
        codeUrl: "src/juegosInfo/Build_Draw/mini1.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
        },
    });

    /* Render la imagen*/
    /*------------------------------------------------------*/
    function debugBase64(base64URL){
        console.log(base64URL);
        var win = window.open();
        win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }

    function handleOnClickTakeScreenshot(e) {
        e.preventDefault();
        const data = unityContext.takeScreenshot("image/jpeg", 1.0);
        if (data !== null) {
            localStorage.setItem("Imagen", data);
            debugBase64(localStorage.getItem("Imagen"))
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
        <div class="flex flex-col bg-white rounded-lg mx-auto mt-5 w-6/6">
            <Unity unityContext={unityContext} matchWebGLToCanvasSize={false}
            style={{height: "100%", width: "100%", border: "2px solid black", textAlign: "center"}} />
            <div className="flex justify-center">
                <button onClick={handleOnClickTakeScreenshot} className = "transition ease-in-out duration-700 hover:bg-violet-800 hover:scale-110 hover:text-white flex justify-center rounded-lg shadow-lg bg-slate-300 w-2/5 m-2">
                    Guardar Dibujo
                </button>
            </div> 
        </div>
    )
}

export default Draw;