import {useEffect, useState} from "react";
import ShadowPreview from "./ShadowPreview";

const Card = () => {
    const [xOffset, setXOffset] = useState('0');
    const [yOffset, setYOffset] = useState('8');
    const [blurRadius, setBlurRadius] = useState('24');
    const [spreadRadius, setSpreadRadius] = useState('-3');
    const [shadowColor, setShadowColor] = useState('#959da5');
    const [colorOpacity, setColorOpacity] = useState('0.2');
    const [boxShadow, setBoxShadow] = useState('');

    const xOffsetHandler = (event) => {
        setXOffset(event.target.value);
    }

    const yOffsetHandler = (event) => {
        setYOffset(event.target.value)
    }

    const blurRadiusHandler = (event) => {
        setBlurRadius(event.target.value)
    }

    const spreadRadiusHandler = (event) => {
        setSpreadRadius(event.target.value)
    }

    const colorChangeHandler = (event) => {
        setShadowColor(event.target.value)
    }

    const opacityChangeHandler = (event) => {
        setColorOpacity(event.target.value)
    }

    const convertToRGB = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    useEffect(() => {
        const rgbColor = convertToRGB(shadowColor);
        const boxShadowValue = xOffset + 'px ' + yOffset + 'px ' + blurRadius + 'px ' + spreadRadius + 'px ' + `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${colorOpacity})`;
        console.log(boxShadowValue)
        setBoxShadow(boxShadowValue)

    }, [xOffset, yOffset, blurRadius, spreadRadius, shadowColor, colorOpacity])

    return (<div className={'card flex flex-col md:flex-row md:h-screen'}>
        <div className={'flex flex-col w-full md:w-1/3 py-10 px-14'}>
            <h1 className={'text-2xl font-bold mb-4'}>Box shadow properties</h1>

            {/* x-offset */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="offset-x" className={'font-semibold'}>Horizontal shadow</label>
                    <div>
                        <input type="number" min={-25} max={25} step={.2} id={'offset-x'} onChange={xOffsetHandler}
                               value={xOffset} className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                        <span className={'font-mono'}>px</span>
                    </div>
                </div>
                <input type="range" className={'w-full'} min={-100} max={100} value={xOffset}
                       onChange={xOffsetHandler}/>
            </div>

            {/* y-offset */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="offset-y" className={'font-semibold'}>Vertical shadow</label>
                    <div>
                        <input type="number" min={-25} max={25} step={.2} id={'offset-y'} onChange={yOffsetHandler}
                               value={yOffset} className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                        <span className={'font-mono'}>px</span>
                    </div>
                </div>

                <input type="range" className={'w-full'} min={-100} max={100} value={yOffset}
                       onChange={yOffsetHandler}/>
            </div>

            {/* Blur Radius */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="blur-radius" className={'font-semibold'}>Blur radius</label>
                    <div>
                        <input type="number" min={-25} max={25} step={.2} name={'blur-radius'} id={'blur-radius'}
                               onChange={blurRadiusHandler} value={blurRadius}
                               className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                        <span className={'font-mono'}>px</span>
                    </div>
                </div>
                <input type="range" className={'w-full'} min={-100} max={100} value={blurRadius}
                       onChange={blurRadiusHandler}/>
            </div>

            {/* Spread Radius */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="spread-radius" className={'font-semibold'}>Spread radius</label>
                    <div>
                        <input type="number" min={-25} max={25} step={.2} name={'spread-radius'} id={'spread-radius'}
                               onChange={spreadRadiusHandler} value={spreadRadius}
                               className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                        <span className={'font-mono'}>px</span>
                    </div>
                </div>
                <input type="range" className={'w-full'} min={-100} max={100} value={0} onChange={spreadRadiusHandler}
                       value={spreadRadius}/>
            </div>

            {/* Color */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="shadow-color" className={'font-semibold'}>Color</label>
                    <div>
                        <input type="color" name={'color'} onChange={colorChangeHandler} value={shadowColor}
                               id={'shadow-color'} className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                        <span className={'font-mono'}>px</span>
                    </div>
                </div>
            </div>

            {/* Opacity */}
            <div className={'mb-4'}>
                <div className={'flex items-baseline justify-between mb-1'}>
                    <label htmlFor="shadow-color" className={'font-semibold'}>Opacity</label>
                    <div>
                        <input type="number" name={'opacity'} onChange={opacityChangeHandler} value={colorOpacity}
                               id={'shadow-color'} className={'p-1 border-2 rounded-lg w-14 mr-6'}/>
                    </div>

                </div>
                <input type="range" className={'w-full'} min={0.1} max={1} step={0.1} onChange={opacityChangeHandler}
                       value={colorOpacity}/>
            </div>
        </div>
        <ShadowPreview boxShadow={boxShadow}/>
    </div>);
}

export default Card;